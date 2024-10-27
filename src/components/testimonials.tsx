import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Clark Kent",
    username: "@clark",
    body: "I can't believe how easy it is to create stunning visuals and unique audio with this app. The AI chat feature also makes brainstorming a breeze! I use it daily to add that extra flair to my social media posts and videos. 🌟",
    img: "https://avatar.vercel.sh/clark",
  },
  {
    name: "Bruce Wayne",
    username: "@bruce",
    body: "The app does everything—chat, images, video, audio—you name it. As a beginner, I was worried it might be too complex, but it’s so user-friendly. The video and image outputs are shockingly high quality!",
    img: "https://avatar.vercel.sh/bruce",
  },
  {
    name: "Steve Rogers",
    username: "@steve",
    body: "I was struggling to keep up with content for my small business, but this app has changed everything. I can generate images, audio, and even short videos in minutes. Plus, the AI chat feature always comes up with fresh ideas.",
    img: "https://avatar.vercel.sh/steve",
  },
  {
    name: "Natasha Romanoff",
    username: "@natasha",
    body: "The AI chat is genuinely engaging and fun to talk to. It also feels like it gets better with every conversation. And the creativity tools are amazing—I’ve made some truly cool images and clips without any prior skills. Kudos to the team!",
    img: "https://avatar.vercel.sh/natasha",
  },
  {
    name: "Tony Stark",
    username: "@tony",
    body: "The AI-generated images are beyond professional, and the video editing features feel like magic! I had my doubts, but I’m so impressed. Perfect for anyone who wants to create without needing a whole studio setup.",
    img: "https://avatar.vercel.sh/tony",
  },
  {
    name: "Billy Batson",
    username: "@billy",
    body: "Whether I’m brainstorming with the AI chat or trying to come up with visuals, this app has it all. I love that I can create on the go and get fantastic results in just a few clicks.",
    img: "https://avatar.vercel.sh/billy",
  },
  {
    name: "Hal Jordan",
    username: "@hal",
    body: "I’ve tried other AI apps, but none can do everything in one place like this. My favorite part is the audio creation; it’s really opened up my options for adding soundscapes to my videos.",
    img: "https://avatar.vercel.sh/hal",
  },
  {
    name: "Lex Luthor",
    username: "@lex",
    body: "As a freelancer, this has saved me hours of work. The AI-generated images are high-quality, and I can add personalized audio or video to make each project unique. Worth every penny.",
    img: "https://avatar.vercel.sh/lex",
  },
  {
    name: "Peter Parker",
    username: "@peter",
    body: "I’m not a designer, but this app makes me feel like one! From the chat suggestions to the image creation, it’s so easy to get professional-looking results without any experience.",
    img: "https://avatar.vercel.sh/peter",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);
const thirdRow = reviews.slice(6);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="flex flex-col gap-20 mt-32">
      <h4 className="text-3xl lg:text-5xl text-foreground lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
        Testimonials
      </h4>
      <div className="relative flex h-[500px] w-full flex-row gap-10 items-center justify-center overflow-hidden rounded-lg bg-background text-foreground">
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:25s] hidden sm:flex"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:25s] hidden lg:flex"
        >
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
}
