import 'twin.macro';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import LabelInput from '../../molecules/LabelInput';
import LabelTextarea from '../../molecules/LabelTextarea';

export interface ContactFormProps {
  onSubmit: React.FormEventHandler;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  return (
    <form tw="grid gap-y-10" onSubmit={onSubmit}>
      <Input name="to_name" value="허세라" hidden required disabled />
      <LabelInput name="from_name" inputTitle="Name" focusOutline required />
      <LabelInput name="email" inputTitle="Email" focusOutline required />
      <LabelTextarea
        name="message"
        textareaTitle="Message"
        focusOutline
        required
      />
      <Button type="submit" variant="outline">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
