import type { WeeklyLog } from '../types/content';

export const weeklyLogs: WeeklyLog[] = [
{
  week: 1,
  slug: 'week-1-orientation-and-setup',
  title: 'Orientation, IDs, and my first git clone',
  dateRange: 'Jun 15 – Jun 19, 2026',
  startDate: '2026-06-15',
  minutes: 2180,
  readTime: '4 min read',
  summary:
  'Company orientation, setting up my dev environment, and cloning the ICQ repository for the first time.',
  highlights: ['Onboarding', 'Dev setup'],
  tags: ['Git', 'Documentation'],
  thumbnailUrl: "/3df24922-c856-4677-b39b-879f90a9dc48.jpg",

  thumbnailAlt: 'Intern holding a new company ID during orientation',
  body: [
  'Day one was paperwork, a building tour, and a very nervous photo for my company ID. By the afternoon I had a laptop, a Jira account, and read access to the ICQ repository — the internal client questionnaire system I would spend most of the summer inside.',
  'Setting up the local environment took longer than I expected. The project runs on an older Laravel version, and my PHP version was too new. I ended up using a version manager instead of reinstalling everything, and wrote down every step immediately.',
  'By Friday I could run the app locally, log in as a test user, and submit a questionnaire end to end. Small win, but it felt big.'],

  tasks: [
  'Completed HR orientation and security briefing',
  'Installed PHP, Composer, Node, and SQLite locally',
  'Cloned the ICQ repository and ran the app end to end',
  'Read the team’s Git branching guide'],

  reflection: 'Write down setup steps the first time. Someone else will need them.'
},
{
  week: 2,
  slug: 'week-2-reading-the-codebase',
  title: 'Learning to read code I didn’t write',
  dateRange: 'Jun 22 – Jun 26, 2026',
  startDate: '2026-06-22',
  minutes: 2265,
  readTime: '5 min read',
  summary:
  'Mapped the ICQ module’s routes, controllers, and Vue components into my own notes before touching anything.',
  highlights: ['Code reading', 'Laravel routes'],
  tags: ['Laravel', 'Documentation'],
  thumbnailUrl: "/4d388260-12cd-44a4-8c84-bbbb8bfcfd26.jpg",

  thumbnailAlt: 'Laptop with code editor open beside a notebook and coffee',
  body: [
  'I gave myself one rule this week: don’t change anything yet, just understand it. So I spent five days tracing how a single questionnaire moves from the Vue form, through the Laravel controller, into the SQLite database, and back out as a PDF report.',
  'I drew the whole flow in my notebook. It was messy, but by Thursday I could answer questions about the module without opening the code — which surprised me.'],

  tasks: [
  'Traced the ICQ submission flow from form to database',
  'Documented 14 routes and their controllers',
  'Listed questions for Friday’s check-in'],

  reflection: 'Reading code is a skill. Nobody teaches it in class, and it’s most of the job.'
},
{
  week: 3,
  slug: 'week-3-first-laravel-fix',
  title: 'My first real ticket: a Laravel bug fix',
  dateRange: 'Jun 29 – Jul 3, 2026',
  startDate: '2026-06-29',
  minutes: 2290,
  readTime: '5 min read',
  summary:
  'Fixed a date-formatting bug in the ICQ report export and opened my first pull request on the team repo.',
  highlights: ['First PR', 'Pair programming'],
  tags: ['Laravel', 'Git'],
  thumbnailUrl: "/fe1985e2-e23e-4e76-8fc1-6a03716ee463.jpg",

  thumbnailAlt: 'Senior developer and intern pair programming at one monitor',
  body: [
  'My first ticket: exported reports were showing dates in UTC instead of Philippine time. The fix itself was three lines in a Laravel accessor. Finding where to put those three lines took a day and a half.',
  'I learned to use `git blame` and the test suite to understand why code looks the way it does before changing it. My PR got four review comments. I fixed all four and it merged on Friday.'],

  tasks: [
  'Fixed timezone formatting in the ICQ report export',
  'Wrote a feature test covering the fix',
  'Opened and merged my first pull request'],

  reflection: 'Review comments aren’t criticism. They’re free lessons.'
},
{
  week: 4,
  slug: 'week-4-first-deploy',
  title: 'First deploy to production',
  dateRange: 'Jul 6 – Jul 10, 2026',
  startDate: '2026-07-06',
  minutes: 2250,
  readTime: '4 min read',
  summary:
  'Shipped two small fixes to production during the team’s Thursday release and watched real users hit my code.',
  highlights: ['Release', 'Code review'],
  milestone: 'First deploy',
  tags: ['Laravel', 'Git'],
  thumbnailUrl: "/bfff54dd-aeef-4fa7-a468-fac08df84e54.jpg",

  thumbnailAlt: 'Hands typing on a laptop with Git commit history on screen',
  body: [
  'Thursday is release day. This week, two of the commits going out were mine — the timezone fix from last week and a small validation message correction.',
  'I watched the deploy run and kept an eye on the logs. Nothing broke. Afterwards, a staff member from the accounting department messaged the team chat to say the report dates finally looked right. I screenshotted it.'],

  tasks: [
  'Prepared release notes for my two changes',
  'Observed the production deployment process',
  'Monitored error logs after release'],

  reflection: 'Somebody actually uses this. That changes how carefully you test.'
},
{
  week: 5,
  slug: 'week-5-rebuilding-the-icq-form',
  title: 'Rebuilding the ICQ form in Vue.js',
  dateRange: 'Jul 13 – Jul 17, 2026',
  startDate: '2026-07-13',
  minutes: 2215,
  readTime: '6 min read',
  summary:
  'Started converting the old jQuery-based questionnaire form into reusable Vue.js components from the new Figma mockups.',
  highlights: ['Vue components', 'Figma handoff'],
  tags: ['Vue.js', 'Figma'],
  thumbnailUrl: "/6269a85b-642c-4184-9784-61ef4a7ab895.jpg",

  thumbnailAlt: 'Intern designing a form wireframe in Figma on a laptop',
  body: [
  'The ICQ form was the oldest part of the system — one huge jQuery file. My task was to rebuild it as Vue.js components based on the Figma mockups.',
  'I moved fast this week. Too fast, honestly. I leaned on an AI assistant for most of the validation logic and pasted in what it suggested. It worked in the browser, so I moved on. That decision comes back next week.'],

  tasks: [
  'Split the ICQ form into 6 Vue components',
  'Matched spacing and states to the Figma mockups',
  'Wired form submission to the existing Laravel endpoint'],

  reflection: '“It works” and “I understand why it works” are two different things.'
},
{
  week: 6,
  slug: 'week-6-refactoring-validation-by-hand',
  title: 'Refactoring the form validation — by hand',
  dateRange: 'Jul 20 – Jul 24, 2026',
  startDate: '2026-07-20',
  minutes: 2282,
  readTime: '6 min read',
  summary:
  'Couldn’t explain my own validation code in review, so I rewrote it manually, rule by rule, until I could.',
  highlights: ['Refactor', 'Ownership'],
  tags: ['Vue.js', 'Laravel'],
  thumbnailUrl: "/c3967119-c5c6-4e47-a781-337912c49b2d.jpg",

  thumbnailAlt: 'Intern sketching a schema diagram on an office whiteboard',
  body: [
  'In Monday’s review, I was asked to walk through a validation function I had written. I couldn’t. I had accepted it without really reading it.',
  'If I couldn’t explain it, it wasn’t really mine yet. So I spent the week manually refactoring the ICQ form validation — mapping every rule on the whiteboard, matching it against the Laravel request rules on the backend, and rewriting the Vue side so both sides agreed.',
  'It took two extra days. The new version is shorter, has tests, and I can explain every line.'],

  tasks: [
  'Mapped all 23 validation rules front and back',
  'Rewrote Vue validation to mirror Laravel form requests',
  'Added unit tests for edge cases'],

  reflection: 'AI is a colleague whose work I have to review, not an answer key.'
},
{
  week: 7,
  slug: 'week-7-supervisor-review',
  title: 'Mid-term review and the Figma revisions',
  dateRange: 'Jul 27 – Jul 31, 2026',
  startDate: '2026-07-27',
  minutes: 2260,
  readTime: '5 min read',
  summary:
  'Presented the rebuilt ICQ form to the team, got my supervisor evaluation, and iterated on the Figma feedback.',
  highlights: ['Demo', 'Evaluation'],
  milestone: 'Supervisor review',
  tags: ['Figma', 'Vue.js'],
  thumbnailUrl: "/dbef5f3d-a5a5-436a-a7fb-84d91d07b824.jpg",

  thumbnailAlt: 'Intern presenting a web app on a TV screen to supervisors',
  body: [
  'I demoed the new ICQ form to my supervisor and two staff members who use it daily. They liked the cleaner layout but found the progress indicator confusing, so I went back into Figma and simplified it.',
  'My supervisor’s evaluation named “strong technical skill & initiative” as my strength — and “improve punctuality & documentation” as what to work on. Both were fair, and the second one shaped how I spent the rest of the OJT.'],

  tasks: [
  'Demoed the rebuilt form to the team and end users',
  'Revised the progress indicator in Figma',
  'Implemented the updated design in Vue'],

  reflection: 'Show unfinished work to real users sooner. They see things you can’t.'
},
{
  week: 8,
  slug: 'week-8-documentation-and-handover',
  title: 'Writing the docs I wished I had',
  dateRange: 'Aug 3 – Aug 7, 2026',
  startDate: '2026-08-03',
  minutes: 2208,
  readTime: '4 min read',
  summary:
  'Wrote setup and component documentation for the ICQ module so the next intern doesn’t start from zero.',
  highlights: ['README', 'Handover'],
  tags: ['Documentation', 'Git'],
  thumbnailUrl: "/4d388260-12cd-44a4-8c84-bbbb8bfcfd26.jpg",

  thumbnailAlt: 'Laptop and notebook on a desk in warm daylight',
  body: [
  'Remember the setup notes from week one? This week they became the project’s new README. I added a section on the version manager, a diagram of the submission flow from week two, and docs for each Vue component I built.',
  'After the feedback on documentation, I wanted this one done properly. I added one line at the top: “Start here.” That might be my favorite commit of the whole OJT.'],

  tasks: [
  'Rewrote the ICQ README with setup steps',
  'Documented props and events for 6 Vue components',
  'Cleaned up and closed my remaining branches'],

  reflection: 'Documentation is a gift to a stranger — often your future self.'
},
{
  week: 9,
  slug: 'week-9-certificate-and-goodbyes',
  title: 'The last week, the certificate, and goodbyes',
  dateRange: 'Aug 10 – Aug 14, 2026',
  startDate: '2026-08-10',
  minutes: 2088,
  readTime: '5 min read',
  summary:
  'Final fixes, an exit evaluation, my Certificate of Completion — and 333h 58m rendered against a 324-hour target.',
  highlights: ['Exit evaluation', 'Certificate'],
  milestone: 'Certificate of completion',
  tags: ['Documentation'],
  thumbnailUrl: "/cd5bdf74-6088-4422-a1ef-8c20c4fffb40.jpg",

  thumbnailAlt: 'The development team posing for a group photo with the intern',
  body: [
  'The final week was quiet on purpose. I fixed two small bugs reported after the form launch, sat for my exit evaluation, and handed over my laptop on Friday afternoon.',
  'We had merienda and took a group photo at the ICT Building. My supervisor, Anthony B. Yanto, EDPS, handed me my Certificate of Completion — 333 hours and 58 minutes against the 324 required. I called my mom from the parking lot.'],

  tasks: [
  'Fixed two post-launch bugs in the ICQ form',
  'Completed the exit evaluation with my supervisor',
  'Returned equipment and revoked my access'],

  reflection: 'Say thank you specifically. People remember what you noticed.'
}];