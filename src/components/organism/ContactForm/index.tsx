import 'twin.macro';

import Button from '../../atoms/Button';
import LabelInput from '../../molecule/LabelInput';
import LabelTextarea from '../../molecule/LabelTextarea';

const ContactForm = () => {
  return (
    <form tw="grid gap-y-10">
      <LabelInput name="name" inputTitle="Name *" focusOutline />
      <LabelInput name="e-mail" inputTitle="Email *" focusOutline />
      <LabelTextarea name="message" textareaTitle="Message *" focusOutline />
      <Button type="submit" variant="outline">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
