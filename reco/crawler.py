"""Crawl wine features from web"""

import os
import json
import time

from tqdm import tqdm
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
from selenium import webdriver


BASE_DATA_FORMAT = {'image': None, 'kor_name': None, 'price': None, 'contents': None,
                    'eng_name': None, 'prod_country': None, 'prod_area': None,
                    'prod_company': None, 'grade': None, 'alcohol_degree': None,
                    'grape_type': None, 'description_short': None, 'taste': None,
                    'score': None}


class Crawler:
    def __init__(self):
        self.url_format = {
            'winenara': "http://www.winenara.com/shop/goods/goods_view.php?goodsno={}&category=",
            'wine21': "https://www.wine21.com/13_search/wine_view.html?Idx={}"
        }
        self.batch_size = 200

    def _load_browser(self):
        self.browser = webdriver.Chrome('../../chromedriver')
        self.browser.delete_all_cookies()
        time.sleep(3)

    def _crawl_wine21(self, item_id):
        url = self.url_format['wine21'].format(item_id)
        soup = bs(urlopen(url), 'html.parser')
        check = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.cnt > h4'
        )

        if not check:
            return False

        self.browser.get(url)
        soup = bs(self.browser.page_source, "html.parser")

        # image
        image = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail1 > div > img')
        if image:
            image = image[0].attrs['src']
        else:
            image = None

        # price
        price = None
        taste = {'당도': None, '산도': None, '바디': None, '타닌': None}
        for i in range(1, 30):
            attr = soup.select(
                '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.wine_info > dl > dt:nth-of-type({})'.format(
                    i))
            if attr:
                name = attr[0].text
                if name in ['당 도', '산 도', '바 디', '타 닌']:
                    taste[name.replace(' ', '')] = self.browser.find_element_by_xpath(
                        '//*[@id="frmMain"]/article/div[1]/div[2]/div[4]/dl/dd[{}]/div/img'.format(
                            i)).get_attribute('src')[-5]
                elif name == '가격':
                    price_value = self.browser.find_element_by_xpath(
                        '//*[@id="frmMain"]/article/div[1]/div[2]/div[4]/dl/dd[{}]/strong[1]'.format(
                            i)).text.strip()
                    if price_value == '가격정보없음':
                        return False
                    price = {
                        'wine21': (
                            self.browser.find_element_by_xpath(
                                '//*[@id="frmMain"]/article/div[1]/div[2]/div[4]/dl/dd[{}]/strong[2]'.format(
                                    i)).text.split(',')[0][1:],
                            int(price_value[:-1].replace(',', ''))
                        )
                    }
        # kor_name
        kor_name = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.cnt > h4')
        if kor_name:
            kor_name = kor_name[0].text
        else:
            kor_name = None

        # eng_name
        eng_name = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.cnt > div.name_en')
        if eng_name:
            eng_name = eng_name[0].text
        else:
            eng_name = None

        # prod_country
        prod_country = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.cnt > div.price > span > img')
        if prod_country:
            prod_country = prod_country[0].attrs['alt']
        else:
            prod_country = None

        # prod_company
        prod_company = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.wine_info > dl > dd.winery > a > span')
        if prod_company:
            prod_company = prod_company[0].text
        else:
            prod_company = None

        # color
        color = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.cnt > div.price > em')
        if color:
            color = color[0].text
        else:
            color = None

        # grape_type
        grape_type = soup.select(
            '#frmMain > article > div.column_block_1.board_list.wine_view_wrap > div.column_detail2 > div.wine_info > dl > dd.variety')
        if grape_type:
            grape_type = grape_type[0].text.strip()
        else:
            grape_type = None

        # contents
        contents = soup.select('#MakerNote_wrap')
        if contents:
            contents = contents[0].text.split('\n')[0].strip()
        else:
            contents = None

        return {
            'url': url,
            'image': image,
            'kor_name': kor_name,
            'eng_name': eng_name,
            'prod_country': prod_country,
            'prod_company': prod_company,
            'color': color,
            'grape_type': grape_type,
            'contents': contents,
            'price': price,
            'taste': taste
        }

    def _crawl_winenara(self, item_id):
        url = self.url_format['winenara'].format(item_id)
        soup = bs(urlopen(url), "html.parser")
        if not bs.select('#objImg'):
            return None

        # Basic info
        image = soup.select('#objImg')[0]['src']
        image = 'http://www.winenara.com/shop/' + image[3:]
        ret = {
            'image': image,
            'kor_name': soup.find_all('td', {'class': 'tx_04b'})[0].text.strip(),
            'price': {'winenara': int(
                soup.select('tr > td.tx_06b')[0].text.strip().replace('원', '').replace(
                    ',', ''))},
            'contents': ''.join([s.text.strip() for s in soup.select('#contents')])
        }
        try:
            # Product info
            attributes = soup.find_all('td', {'class': 'tx_08'})
            ret.update({
                'eng_name': attributes[0].text.strip(),
                'prod_country': attributes[1].text.strip(),
                'prod_area': attributes[3].text.strip(),
                'prod_company': attributes[4].text.strip(),
                'grade': attributes[5].text.strip(),
                'alcohol_degree': attributes[6].text.strip(),
                'grape_type': attributes[7].text.strip(),
                'description_short': attributes[-1].text.strip()
            })
        except:
            pass
        try:
            # Taste info
            tastes = soup.select(
                'td.outline_side > table > tr > td > table > tr > td > img')
            ret.update({
                'taste': {
                    'acid': int(tastes[3]['src'][-5]),
                    'body': int(tastes[7]['src'][-5])
                },
                'score': {
                    'RP': int(soup.find('td', {'class': 'tx_19'}).text[0]),
                    'CR': int(soup.find_all('span', {'class': 'tx_19'})[0].text[0]),
                    'WS': int(soup.find_all('span', {'class': 'tx_19'})[1].text[0]),
                    'WE': int(soup.find_all('span', {'class': 'tx_19'})[2].text[0]),
                }
            })
        except:
            pass
        return ret

    def crawl_winenara(self):
        data = {}
        for item_id in tqdm(range(1001, 9999)):
            try:
                if item_id in data:
                    continue
                crawled = BASE_DATA_FORMAT
                crawled.update(self._crawl_winenara(item_id))
                data[item_id] = crawled
            except:
                pass
        return data

    def crawl_wine21(self):
        i = 0
        data = {}

        for item_id in tqdm(range(137668, 166435)):
            try:
                crawled = BASE_DATA_FORMAT
                crawled.update(self._crawl_wine21(item_id))
                if crawled:
                    data[str(item_id)] = crawled
                    i += 1
                    time.sleep(1)
                if i > 1 and i % self.batch_size == 0:
                    time.sleep(10)
            except Exception as e:
                time.sleep(3)
                self._load_browser()
        return data

    def _crawl(self):
        data = {}
        self._load_browser()
        winenara = self.crawl_winenara()
        wine21 = self.crawl_wine21()
        data.update(winenara)
        data.update(wine21)
        return data

    def save(self, data, save_path='./models/'):
        with open(os.path.join(save_path, 'r')) as f:
            f.write(json.dumps(data, ensure_ascii=False))

    def crawl(self):
        data = self._crawl()
        return data

