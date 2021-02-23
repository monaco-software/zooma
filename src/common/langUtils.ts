const langPack = {
  navbar_root: 'Главная',
  navbar_game: 'Играть',
  navbar_game_levels: 'Уровни',
  navbar_leaderboard: 'Рейтинг',
  navbar_forum: 'Форум',
  navbar_account: 'Профиль',
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
  game_over_page_header: 'Игра окончена',
  game_over_to_home_button: 'На главную',
  game_over_to_game_button: 'Попробовать еще раз',
  game_over_to_levels_button: 'К списку уровней',
  leaderboard_page_header: 'Рейтинг',
  leaderboard_table_placeholder_message: 'В таблице пока что нет данных 😔️.\nПоставьте рекорд первым!',
  leaderboard_table_placeholder_cta: 'Играть',
  levels_page_header: 'Уровни игры',
  levels_page_level_word: 'Уровень',
  forum_page_header: 'Форум',
  forum_create_topic_button: 'Создать тему',
  forum_create_topic_modal_header: 'Создать тему',
  form_topic_name: 'Название',
  forum_create_topic_form_submit: 'Создать',
  forum_topic_create_date: 'Создана:',
  forum_topic_input_message_tab: 'Сообщение',
  forum_topic_input_preview_tab: 'Предпросмотр',
  forum_topic_input_markdown_support: 'С поддержкой',
  forum_topic_input_markdown: 'Markdown',
  forum_topic_input_submit: 'Отправить',
  forum_topic_send_message_button: 'Написать сообщение',
};

export const getText = (key: keyof typeof langPack): string => langPack[key];
