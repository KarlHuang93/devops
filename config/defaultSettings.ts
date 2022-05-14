import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "mix",
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "pwa": false,
  "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "headerHeight": 48,
  "splitMenus": true
};

export default Settings;
// {
//   navTheme: 'light',
//     // 拂晓蓝
//     primaryColor: '#1890ff',
//   layout: 'mix',
//   contentWidth: 'Fluid',
//   fixedHeader: true,
//   fixSiderbar: true,
//   colorWeak: false,
//   title: '运维平台',
//   pwa: false,
//   logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
//   iconfontUrl: '',
// };
