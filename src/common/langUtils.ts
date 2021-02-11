const langPack = {
  required_field: 'Обязательное поле',
  signin_page_header: 'Вход',
  signup_page_header: 'Регистрация',
  form_login_label: 'Логин',
  form_password_label: 'Пароль',
  form_password_confirm_label: 'Пароль (еще раз)',
  signin_form_submit_button: 'Войти',
  signup_form_submit_button: 'Зарегистрироваться',
  signin_form_no_account_button: 'Нет аккаунта?',
  signup_form_no_account_button: 'Уже есть аккаунт?',
  form_email_label: 'Email',
  form_email_input_error: 'Некорректный email',
  form_login_input_error: 'Латинские буквы, цифры, от 3 символов',
  form_first_name_label: 'Имя',
  form_first_name_error: 'Только буквы, от 3 символов',
  form_second_name_label: 'Фамилия',
  form_second_name_error: 'Только буквы, от 3 символов',
  form_phone_label: 'Телефон',
  form_phone_input_error: 'Неверный формат',
  form_password_min_uppercase: 'Минимум одна заглавная буква',
  form_password_min_lowercase: 'Минимум одна строчная буква',
  form_password_min_special: 'Минимум один специальный символ',
  form_password_min_chars: 'От 8 символов',
  form_password_equal_confirm: 'Пароли должны совпадать',
};

export const getLang = (key: keyof typeof langPack): string => langPack[key];
