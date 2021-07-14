import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  logo: string;
};

const proSettings: DefaultSettings = {
  logo: 'https://pic1.zhimg.com/v2-cba0b89d2bf2d96a1ed26edb5849f804_180x120.jpg',
  navTheme: 'light', // dark
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Test-Frame',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
