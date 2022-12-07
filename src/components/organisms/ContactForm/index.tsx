import 'twin.macro';

import Button from '../../atoms/Button';
import LabelInput from '../../molecules/LabelInput';
import LabelTextarea from '../../molecules/LabelTextarea';

export interface ContactFormProps {
  onSubmit: React.FormEventHandler;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  return (
    <form tw="grid gap-y-10" onSubmit={onSubmit}>
      <LabelInput name="name" inputTitle="Name" focusOutline required />
      <LabelInput name="e-mail" inputTitle="Email" focusOutline required />
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
