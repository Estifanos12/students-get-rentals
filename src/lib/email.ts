import * as handlebars from 'handlebars';

import { ResetPassword } from '@/components/email/resetPassword';
import { sendOTP } from '@/components/email/sendOtp';

export const compileResetEmailTemplate = (url: string) => {
  const template = handlebars.compile(ResetPassword);
  const htmlBody = template({
    url,
  });

  return htmlBody;
};

export const compileSendOTPEmailTemplate = (otp: string) => {
  const template = handlebars.compile(sendOTP);
  const htmlBody = template({
    otp,
  });

  return htmlBody;
};
