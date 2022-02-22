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
    $auto_reply_text .= "お問い合わせ内容：" . nl2br($clean['message']) . "\n\n";
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
    $admin_reply_text .= "お問い合わせ内容：" . nl2br($clean['message']) . "\n\n";

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
  <meta name="description" content="">
  <link rel="stylesheet" href="/css/contact.css">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <script defer src="/js/contact.js"></script>

</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TG426DZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div class="wrapper">
    <header class="header">
      <h1 class="site-title">
        <a class="site-title__link" href="/">SUSHIBOYS</a>
      </h1>

      <nav class="global-navigation">
        <div class="global-navigation--sp">
          <div id="js-global-navigation--sp__selector" class="global-navigation--sp__selector">
            <div class="global-navigation--sp__title">CONTACT</div>
          </div>
          <div id="js-global-navigation--sp__menu" class="global-navigation--sp__menu">
            <ul class="global-navigation--sp__list">
              <li class="global-navigation--sp__item"><a class="global-navigation--sp__link" href="/">HOME</a></li>
              <li class="global-navigation--sp__item"><a class="global-navigation--sp__link" href="/news/">NEWS</a></li>
              <li class="global-navigation--sp__item"><a class="global-navigation--sp__link" href="/discography/">DISCOGRAPHY</a></li>
              <li class="global-navigation--sp__item"><a class="global-navigation--sp__link" href="https://sushiboys.thebase.in/" target="_blank" rel="noopener noreferrer">GOODS</a></li>
              <li class="global-navigation--sp__item"><a class="global-navigation--sp__link" href="/contact/">CONTACT</a></li>
            </ul>
            <div class="global-navigation--sp__close-wrap">
              <div id="js-global-navigation--sp__close" class="global-navigation--sp__close"></div>
            </div>
          </div>
        </div>
        <div class="global-navigation--pc">
          <ul class="global-navigation--pc__list">
            <li class="global-navigation--pc__item"><a class="global-navigation--pc__link" href="/">HOME</a></li>
            <li class="global-navigation--pc__item"><a class="global-navigation--pc__link" href="/news/">NEWS</a></li>
            <li class="global-navigation--pc__item"><a class="global-navigation--pc__link" href="/discography/">DISCOGRAPHY</a></li>
            <li class="global-navigation--pc__item"><a class="global-navigation--pc__link" href="https://sushiboys.thebase.in/" target="_blank" rel="noopener noreferrer">GOODS</a></li>
            <li class="global-navigation--pc__item"><a class="global-navigation--pc__link current" href="/contact/">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="main">
      <section class="section">
        <?php if ($page_flag === 1) : ?>

          <!-- 確認ページ start -->
          <form class="contact" method="post" action="">
            <!-- 表示用 start-->
            <label class="contact__label" for="">Name</label>
            <p class="contact__input-confirmation"><?php echo $clean['name']; ?></p>
            <label class="contact__label" for="">Email</label>
            <p class="contact__input-confirmation"><?php echo $clean['email']; ?></p>
            <label class="contact__label" for="">Subject</label>
            <p class="contact__input-confirmation"><?php echo $clean['subject']; ?></p>
            <label class="contact__label" for="">Message</label>
            <p class="contact__input-confirmation"><?php echo nl2br($clean['message']); ?></p>
            <div class="contact__button-wrap">
              <button class="contact__button" type="submit" name="button_back" value="Back">
                <div class="contact__button-inner">
                  <span class="contact__button-text">Back</span>
                </div>
              </button>
              <button class="contact__button" type="submit" name="button_submit" value="Send">
                <div class="contact__button-inner">
                  <i class="contact__button-icon fas fa-paper-plane"></i><span class="contact__button-text">Send</span>
                </div>
              </button>
            </div>
            <!-- 表示用 end -->

            <!-- 入力値の受け渡し用 start -->
            <input type="hidden" name="name" value="<?php echo $clean['name']; ?>">
            <input type="hidden" name="email" value="<?php echo $clean['email']; ?>">
            <input type="hidden" name="subject" value="<?php echo $clean['subject']; ?>">
            <input type="hidden" name="message" value="<?php echo $clean['message']; ?>">
            <!-- 入力値の受け渡し用 end -->
          </form>
          <!-- 確認ページ end -->

        <?php elseif ($page_flag === 2) : ?>

          <!-- ページ start -->
          <div class="contact">
            <p class="contact__completion-text">Your request has been sent.</p>
          </div>
          <!-- ページ end -->

        <?php else : ?>

          <?php if (!empty($error)) : ?>
            <ul>
              <?php foreach ($error as $value) : ?>
                <li class="contact__error"><?php echo $value; ?></li>
              <?php endforeach; ?>
            </ul>
          <?php endif; ?>

          <!-- 入力ページ start -->
          <form class="contact" method="post" action="" novalidate>
            <label class="contact__label" for="">Name</label>
            <input class="contact__input" type="text" name="name" value="<?php if (!empty($clean['name'])) {
                                                                            echo $clean['name'];
                                                                          } ?>" placeholder="Neo Yoshikawa" autocomplete="off" required>
            <label class="contact__label" for="">Email</label>
            <input class="contact__input" type="email" name="email" value="<?php if (!empty($clean['email'])) {
                                                                              echo $clean['email'];
                                                                            } ?>" placeholder="sushiboys350@yahoo.co.jp" autocomplete="off" required>
            <label class="contact__label" for="">Subject</label>
            <input class="contact__input" type="subject" name="subject" value="<?php if (!empty($clean['subject'])) {
                                                                                  echo $clean['subject'];
                                                                                } ?>" placeholder="About your inquiry for our products" autocomplete="off" required>
            <label class="contact__label" for="">Message</label>
            <textarea class="contact__textarea" name="message" placeholder="I have a question regarding your online shop." autocomplete="off" required><?php if (!empty($clean['message'])) {
                                                                                                                                                          echo $clean['message'];
                                                                                                                                                        } ?></textarea>
            <div class="contact__button-wrap">
              <button class="contact__button" type="submit" name="button_confirm" value="Confirm">
                <div class="contact__button-inner">
                  <i class="contact__button-icon fas fa-paper-plane"></i><span class="contact__button-text">Confirm</span>
                </div>
              </button>
            </div>
          </form>
          <!-- 入力ページ end -->

        <?php endif; ?>
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
        <small>&copy; 2022 SUSHIBOYS</small>
      </p>
    </footer>

  </div>
</body>

</html>
