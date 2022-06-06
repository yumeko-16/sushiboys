<?php
// var_dump($clean);

// 変数の初期化
$page_flag = 0;
$clean = array();
$error = array();

// サニタイズ
if (!empty($_POST)) {
  foreach ($_POST as $key => $value) {
    $clean[$key] = htmlspecialchars($value, ENT_QUOTES);
  }
}

if (!empty($clean['button_confirm'])) {

  $error = validation($clean);

  if (empty($error)) {
    $page_flag = 1;

    // セッションの書き込み
    session_start();
    $_SESSION['page'] = true;
  }
} elseif (!empty($clean['button_submit'])) {

  session_start();
  if (!empty($_SESSION['page']) && $_SESSION['page'] === true) {

    // セッションの削除
    unset($_SESSION['page']);

    $page_flag = 2;

    // 変数とタイムゾーンを初期化
    $header = null;
    $auto_reply_subject = null;
    $auto_reply_text = null;
    date_default_timezone_set('Asia/Tokyo');

    // ヘッダー情報を設定
    $header = "MIME-Version: 1.0\n";
    $header .= "From: SUSHIBOYS <sushiboys350@yahoo.co.jp>\n";
    $header .= "Reply-To: SUSHIBOYS <sushiboys350@yahoo.co.jp>\n";

    // 件名を設定
    $auto_reply_subject = 'お問い合わせありがとうございます。';

    // 本文を設定
    $auto_reply_text = "この度は、お問い合わせ頂き誠にありがとうございます。
下記の内容でお問い合わせを受け付けました。\n\n";
    $auto_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
    $auto_reply_text .= "氏名：" . $clean['name'] . "\n";
    $auto_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
    $auto_reply_text .= "お問い合わせ内容：" . "\n" . nl2br($clean['message']) . "\n\n";
    $auto_reply_text .= "SUSHIBOYS 窓口";

    // メール送信
    mb_send_mail($clean['email'], $auto_reply_subject, $auto_reply_text, $header);

    // SUSHIBOYS側へ送るメールの件名
    $admin_reply_subject = "お問い合わせがあったお";

    // 本文を設定
    $admin_reply_text = "下記の内容でお問い合わせがあったお。\n\n";
    $admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
    $admin_reply_text .= "氏名：" . $clean['name'] . "\n";
    $admin_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
    $admin_reply_text .= "件名：" . $clean['subject'] . "\n";
    $admin_reply_text .= "お問い合わせ内容：" . "\n" . nl2br($clean['message']) . "\n\n";

    // SUSHIBOYS側へメール送信
    mb_send_mail('sushiboys.tm@gmail.com, sushiboys350@yahoo.co.jp', $admin_reply_subject, $admin_reply_text, $header);
  } else {
    $page_flag = 0;
  }
}

function validation($data) {

  $error = array();

  // Nameのバリデーション
  if (empty($data['name'])) {
    $error[] = "「Name」は必ず入力してください。";
  } elseif (20 < mb_strlen($data['name'])) {
    $error[] = "「Name」は20文字以内で入力してください。";
  }
  // Emailのバリデーション
  if (empty($data['email'])) {
    $error[] = "「Email」は必ず入力してください。";
  } elseif (!preg_match('/^[0-9a-z_.\/?-]+@([0-9a-z-]+\.)+[0-9a-z-]+$/', $data['email'])) {
    $error[] = "「メールアドレス」は正しい形式で入力してください。";
  }

  // Subjectのバリデーション
  if (empty($data['subject'])) {
    $error[] = "「Subject」は必ず入力してください。";
  }

  // Messageのバリデーション
  if (empty($data['message'])) {
    $error[] = "「Message」は必ず入力してください。";
  }

  return $error;
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TG426DZ');
  </script>
  <!-- End Google Tag Manager -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CONTACT | SUSHIBOYS</title>
  <meta name="description" content="SUSHIBOYSの鼓膜に直接コンタクト。ご連絡おまちしております。">
  <link rel="canonical" href="https://sushiboys350.com/contact/">
  <link rel="stylesheet" href="/css/contact.css?202203292010">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <script defer src="/js/contact.js"></script>
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TG426DZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div class="wrapper">
    <header class="header" data-header>
      <h1 class="header__title">
        <a class="header__title-anchor" href="/">Sushiboys</a>
      </h1>
      <input id="humberger" class="header__checkbox" type="checkbox" data-humberger-toggle>
      <label class="header__button" for="humberger">
        <i class="header__button-bar"></i>
        <i class="header__button-bar"></i>
        <i class="header__button-bar"></i>
      </label>
      <nav class="navigation-sm" data-humberger-content>
        <ul class="navigation-sm__list">
          <li class="navigation-sm__item">
            <a class="navigation-sm__anchor" href="/">Home</a>
          </li>
          <li class="navigation-sm__item">
            <a class="navigation-sm__anchor" href="/news/">News</a>
          </li>
          <li class="navigation-sm__item">
            <a class="navigation-sm__anchor" href="/discography/">Discography</a>
          </li>
          <li class="navigation-sm__item">
            <a class="navigation-sm__anchor" href="/goods/">Goods</a>
          </li>
          <li class="navigation-sm__item">
            <a class="navigation-sm__anchor" href="/contact/">Contact</a>
          </li>
        </ul>
        <div class="navigation-sm__close-wrap">
          <div class="navigation-sm__close" data-navigation-close></div>
        </div>
      </nav>
      <nav class="navigation-pc">
        <ul class="navigation-pc__list">
          <li class="navigation-pc__item"><a class="navigation-pc__anchor" href="/">Home</a></li>
          <li class="navigation-pc__item"><a class="navigation-pc__anchor" href="/news/">News</a></li>
          <li class="navigation-pc__item"><a class="navigation-pc__anchor" href="/discography/">Discography</a></li>
          <li class="navigation-pc__item"><a class="navigation-pc__anchor" href="/goods/">Goods</a></li>
          <li class="navigation-pc__item"><a class="navigation-pc__anchor current" href="/contact/">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <section class="section">
        <h2 class="heading" data-heading="Contact">
          お問い合わせ
        </h2>
        <div class="section__inner">

          <?php if ($page_flag === 1) : ?>

            <!-- 確認ページ start -->
            <form class="contact" method="post" action="">
              <!-- 表示用 start-->
              <div class="contact__group">
                <label class="contact__label" for="">Name</label>
                <p class="contact__input-confirmation"><?= $clean['name']; ?></p>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Email</label>
                <p class="contact__input-confirmation"><?= $clean['email']; ?></p>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Subject</label>
                <p class="contact__input-confirmation"><?= $clean['subject']; ?></p>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Message</label>
                <p class="contact__input-confirmation"><?= nl2br($clean['message']); ?></p>
              </div>
              <div class="button__wrap">
                <button class="button" type="submit" name="button_back" value="Back">
                  <span class="button__text">Back</span>
                </button>
                <button class="button" type="submit" name="button_submit" value="Send">
                  <i class="button__icon fas fa-paper-plane"></i><span class="button__text">Send</span>
                </button>
              </div>
              <!-- 表示用 end -->

              <!-- 入力値の受け渡し用 start -->
              <input type="hidden" name="name" value="<?= $clean['name']; ?>">
              <input type="hidden" name="email" value="<?= $clean['email']; ?>">
              <input type="hidden" name="subject" value="<?= $clean['subject']; ?>">
              <input type="hidden" name="message" value="<?= $clean['message']; ?>">
              <!-- 入力値の受け渡し用 end -->
            </form>
            <!-- 確認ページ end -->

          <?php elseif ($page_flag === 2) : ?>

            <!-- 完了ページ start -->
            <div class="contact">
              <p class="contact__completion-text">Your request has been sent.</p>
              <div class="button__wrap">
                <a class="button" href="/contact/">
                  <span class="button__text">Back</span>
                </a>
              </div>
            </div>
            <!-- 完了ページ end -->

          <?php else : ?>

            <!-- 入力ページ start -->
            <?php if (!empty($error)) : ?>
              <ul>
                <?php foreach ($error as $value) : ?>
                  <li class="contact__error"><?= $value; ?></li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
            <form class="contact" method="post" action="" novalidate>
              <div>
                <label class="contact__label" for="">Name</label>
                <input class="contact__input" type="text" name="name" value="<?php if (!empty($clean['name'])) {
                                                                                echo $clean['name'];
                                                                              } ?>" placeholder="neo yoshikawa" autocomplete="off" required>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Email</label>
                <input class="contact__input" type="email" name="email" value="<?php if (!empty($clean['email'])) {
                                                                                  echo $clean['email'];
                                                                                } ?>" placeholder="sushiboys350@yahoo.co.jp" autocomplete="off" required>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Subject</label>
                <input class="contact__input" type="subject" name="subject" value="<?php if (!empty($clean['subject'])) {
                                                                                      echo $clean['subject'];
                                                                                    } ?>" placeholder="About your inquiry for our products" autocomplete="off" required>
              </div>
              <div class="contact__group">
                <label class="contact__label" for="">Message</label>
                <textarea class="contact__textarea" name="message" placeholder="I have a question regarding your online shop." autocomplete="off" required><?php if (!empty($clean['message'])) {
                                                                                                                                                              echo $clean['message'];
                                                                                                                                                            } ?></textarea>
              </div>
              <div class="button__wrap">
                <button class="button" type="submit" name="button_confirm" value="Confirm">
                  <i class="button__icon fas fa-paper-plane"></i><span class="button__text">Confirm</span>
                </button>
              </div>
            </form>
            <!-- 入力ページ end -->

          <?php endif; ?>

        </div>
      </section>
    </main>

    <footer class="footer">
      <ul class="sns">
        <li class="sns__item">
          <a class="sns__link" href="https://www.facebook.com/people/Sushiboys/100057913514913/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="sns__item">
          <a class="sns__link" href="//twitter.com/sushiboys350" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="sns__item">
          <a class="sns__link" href="//www.instagram.com/sushiboys350" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="sns__item">
          <a class="sns__link" href="//www.tiktok.com/@sushiboys350" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </li>
        <li class="sns__item">
          <a class="sns__link" href="//www.youtube.com/user/umetube2013" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">
        <small class="copyright-text">&copy; 2022 Sushiboys</small>
      </p>
    </footer>
  </div>
</body>

</html>
