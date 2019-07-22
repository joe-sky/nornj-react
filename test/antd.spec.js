import { shallow, mount } from 'enzyme';
import nj from 'nornj';
import '../antd/affix';
import '../antd/alert';
import '../antd/breadcrumb';
import '../antd/button';
import '../antd/calendar';
import '../antd/card';
import '../antd/cascader';
import '../antd/checkbox';
import '../antd/collapse';
import '../antd/date-picker';
import '../antd/form';
import '../antd/icon';
import '../antd/input';
import '../antd/menu';
import message from '../antd/message';
import '../antd/modal';
import notification from '../antd/notification';
import '../antd/pagination';
import '../antd/popover';
import '../antd/progress';
import '../antd/radio';
import '../antd/select';
import '../antd/slider';
import '../antd/switch';
import '../antd/table';
import '../antd/tabs';
import '../antd/tooltip';
import '../antd/transfer';
import '../antd/tree';
import '../antd/tree-select';
import '../antd/upload';

describe('Antd spec', function () {
  describe('default', () => {
    const wrapper = mount(nj`<ant-Affix/>`());

    it('should be div tag by default', () => {
      expect(wrapper.find('div').exists()).toBe(true);
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Alert message="Success Text" type="success"/>`());

    it('should be div tag with class name "ant-alert"', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-alert');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Breadcrumb><ant-BreadcrumbItem>Home</ant-BreadcrumbItem></ant-Breadcrumb>`());

    it('should be div tag by default', () => {
      expect(wrapper).toHaveDisplayName('Breadcrumb');
    });

    it('and should have class name "ant-breadcrumb"', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-breadcrumb');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Button>Default</ant-Button>`());

    it('should be button tag by default', () => {
      expect(wrapper.find('button').at(0)).toHaveClassName('ant-btn');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Calendar/>`());

    it('should be div tag by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-fullcalendar-fullscreen');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Card><p>Card content</p></ant-Card>`());

    it('should be div tag by default', () => {
      expect(wrapper).toHaveDisplayName('Card');
    });

    it('and should have class name "ant-card"', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-card');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Cascader />`());

    it('should be span tag with class name "ant-cascader-picker" by default', () => {
      expect(wrapper.find('span').at(0)).toHaveClassName('ant-cascader-picker');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Checkbox>Checkbox</ant-Checkbox>`());

    it('should be label tag by default', () => {
      expect(wrapper).toHaveDisplayName('Checkbox');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Collapse />`());

    it('should be div tag with class name "ant-collapse" by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-collapse');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-DatePicker />`());

    it('should be span tag with class name "ant-calendar-picker" by default', () => {
      expect(wrapper.find('span').at(0)).toHaveClassName('ant-calendar-picker');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Form><ant-FormItem>
          <!--{getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <ant-Input placeholder="Username" />
          )}-->
        </ant-FormItem></ant-Form>` ());

    it('should be form tag by default', () => {
      expect(wrapper).toHaveDisplayName('Form');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Icon type="link"/>`());

    it('should be i tag by default', () => {
      expect(wrapper).toHaveDisplayName('Icon');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Input />`());

    it('should be input tag by default', () => {
      expect(wrapper).toHaveDisplayName('Input');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Menu />`());

    it('should be ul tag with class name "ant-menu" by default', () => {
      expect(wrapper.find('ul').at(0)).toHaveClassName('ant-menu');
    });
  });

  describe('default', () => {
    const spy = jest.spyOn(message, 'info');

    message.info('This is a normal message');

    it('should be called', () => {
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Modal visible={true}/>`());
    //console.log(5, wrapper.html());
    it('its props visible equal to true', () => {
      expect(wrapper.props().visible).toEqual(true);
    });
  });

  describe('default', () => {
    const spy = jest.spyOn(notification, 'info');

    notification.info({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });

    it('should be called', () => {
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Pagination />`());

    it('should be ul tag with class name "ant-pagination" by default', () => {
      expect(wrapper.find('ul').at(0)).toHaveClassName('ant-pagination');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Popover />`());

    it('should be span tag by default', () => {
      expect(wrapper.find('span').exists()).toBe(true);
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Progress />`());

    it('should be div tag by default', () => {
      expect(wrapper).toHaveDisplayName('Progress');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Radio />`());

    it('should be label tag by default', () => {
      expect(wrapper).toHaveDisplayName('Radio');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Select />`());

    it('should be div tag with class name "ant-select" by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-select');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Slider />`());

    it('should be div tag with class name "ant-slider" by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-slider');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Switch />`());

    it('should be span tag with class name "ant-switch-inner" by default', () => {
      expect(wrapper.find('span').at(0)).toHaveClassName('ant-switch-inner');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Table />`());

    it('should be div tag by default', () => {
      expect(wrapper).toHaveDisplayName('Table');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Tabs />`());

    it('should be div tag with class name "ant-tabs" by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-tabs');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Tooltip />`());

    it('should be span tag by default', () => {
      expect(wrapper.find('span').exists()).toBe(true);
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Transfer />`());

    it('should be div tag by default', () => {
      expect(wrapper.find('div').at(0)).toHaveClassName('ant-transfer');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Tree />`());

    it('should be ul tag with class name "ant-tree" by default', () => {
      expect(wrapper.find('ul').at(0)).toHaveClassName('ant-tree');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-TreeSelect />`());

    it('should be span tag with class name "ant-select" by default', () => {
      expect(wrapper.find('span').at(0)).toHaveClassName('ant-select');
    });
  });

  describe('default', () => {
    const wrapper = mount(nj`<ant-Upload />`());

    it('should be span tag by default', () => {
      expect(wrapper).toHaveDisplayName('Upload');
    });
  });
});