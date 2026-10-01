-- ============================================================
-- LAWLINK SEED DATA
-- ============================================================

-- TOPICS

insert into public.topics
(name, slug, description, icon, difficulty)
values

(
  'Cyber Safety',
  'cyber-safety',
  'Learn how to recognize and respond to common online scams.',
  '🔐',
  'easy'
),

(
  'Consumer Rights',
  'consumer-rights',
  'Learn practical consumer rights and complaint procedures.',
  '🛒',
  'easy'
),

(
  'Road Safety',
  'road-safety',
  'Learn practical legal and safety concepts related to roads.',
  '🚗',
  'easy'
),

(
  'Women''s Safety',
  'womens-safety',
  'Learn about safety resources and rights.',
  '🛡️',
  'medium'
),

(
  'Student Rights',
  'student-rights',
  'Learn practical rights relevant to students.',
  '🎓',
  'easy'
);

-- ============================================================
-- SCENARIOS
-- ============================================================

insert into public.scenarios
(topic_id, title, description, difficulty, estimated_minutes, xp_reward, order_number)

select
  id,
  'Suspicious Bank Message',
  'You receive a message claiming your bank account will be blocked unless you click a link.',
  'easy',
  5,
  50,
  1
from public.topics
where slug = 'cyber-safety';

insert into public.scenarios
(topic_id, title, description, difficulty, estimated_minutes, xp_reward, order_number)

select
  id,
  'UPI Payment Scam',
  'Someone asks you to scan a QR code to receive money but the request actually initiates a payment.',
  'easy',
  5,
  50,
  2
from public.topics
where slug = 'cyber-safety';

-- ============================================================
-- QUESTIONS
-- ============================================================

insert into public.questions
(
  scenario_id,
  question_text,
  question_type,
  explanation,
  xp_reward,
  order_number
)

select
  id,
  'What should you do first when receiving a suspicious bank message?',
  'multiple_choice',
  'Verify the message using an official bank channel instead of using links in the message.',
  10,
  1
from public.scenarios
where title = 'Suspicious Bank Message';

insert into public.questions
(
  scenario_id,
  question_text,
  question_type,
  explanation,
  xp_reward,
  order_number
)

select
  id,
  'Should you click an unknown link in the message?',
  'multiple_choice',
  'Do not click suspicious links. Verify information independently.',
  10,
  2
from public.scenarios
where title = 'Suspicious Bank Message';

-- ============================================================
-- OPTIONS
-- ============================================================

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'Click the link immediately',
  false,
  1
from public.questions q
where q.question_text =
'What should you do first when receiving a suspicious bank message?';

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'Verify through the bank''s official channel',
  true,
  2
from public.questions q
where q.question_text =
'What should you do first when receiving a suspicious bank message?';

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'Forward the message to everyone',
  false,
  3
from public.questions q
where q.question_text =
'What should you do first when receiving a suspicious bank message?';

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'Reply with your password',
  false,
  4
from public.questions q
where q.question_text =
'What should you do first when receiving a suspicious bank message?';

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'Yes',
  false,
  1
from public.questions q
where q.question_text =
'Should you click an unknown link in the message?';

insert into public.question_options
(question_id, option_text, is_correct, order_number)

select
  q.id,
  'No',
  true,
  2
from public.questions q
where q.question_text =
'Should you click an unknown link in the message?';

-- ============================================================
-- BADGES
-- ============================================================

insert into public.badges
(name, description, icon, requirement_type, requirement_value)
values

(
  'First Step',
  'Complete your first learning scenario.',
  '🌱',
  'scenarios_completed',
  1
),

(
  'Cyber Guardian',
  'Complete five cyber safety scenarios.',
  '🛡️',
  'cyber_scenarios_completed',
  5
),

(
  'Knowledge Builder',
  'Earn 500 XP.',
  '📚',
  'xp',
  500
);

-- ============================================================
-- RESOURCES
-- ============================================================

insert into public.resources
(
  topic_id,
  title,
  description,
  organization,
  url,
  resource_type,
  verified_at
)

select
  id,
  'Official Cybercrime Reporting Portal',
  'Official resource for reporting cybercrime in India.',
  'Government of India',
  'https://cybercrime.gov.in/',
  'official',
  now()
from public.topics
where slug = 'cyber-safety';