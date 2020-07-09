import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons'; // pega todas as propriedades de um ícone

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;

// icon: Icon = é tipo renomear a variável
