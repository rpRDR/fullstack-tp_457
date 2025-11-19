import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<LoginFormComponent> = {
  title: 'Auth/LoginForm',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginFormComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {
  args: {
    login: action('login-submitted')
  }
};
