import { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/ContentLibrary.module.scss';

const articles = [
  {
    id: 1,
    title: 'The Power of Mindfulness: Simple Practices for Daily Peace',
    image: '/img/article1.png',
    summary:
      'Discover how mindfulness can transform your daily life. Learn easy practices to reduce stress, improve focus, and enhance overall well-being.',
    content: (
      <>
        <p>
          Mindfulness is a mental state achieved by focusing on the present moment while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations. Here are some simple practices:
        </p>
        <ul>
          <li>
            <strong>Focused Breathing:</strong> Spend 5 minutes each day sitting quietly and focusing on your breath.
          </li>
          <li>
            <strong>Mindful Walking:</strong> Pay attention to each step, the ground beneath your feet, and your surroundings.
          </li>
          <li>
            <strong>Gratitude Journaling:</strong> Write down three things you’re grateful for each day.
          </li>
        </ul>
        <p>
          Mindfulness reduces stress, improves focus, and promotes overall well-being. Start with small steps, and over time,
          you’ll feel more balanced and present.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Creative Outlets for Stress Relief: Why Art Matters',
    image: '/img/article2.png',
    summary: 'Unleash your creativity to cope with stress. From painting to journaling, explore activities that help you relax and express yourself.',
    content: (
      <>
        <p>Creativity is a powerful tool for stress relief and emotional expression. Engaging in art can provide a sense of calm and allow for deeper self-exploration:</p>
        <ul>
          <li>
            <strong>Painting and Drawing:</strong> These activities encourage focus and mindfulness, similar to meditation.
          </li>
          <li>
            <strong>Journaling:</strong> Writing your thoughts and feelings can help release emotional tension.
          </li>
          <li>
            <strong>DIY Crafts:</strong> Creating something with your hands, such as pottery or knitting, fosters a sense of accomplishment.
          </li>
        </ul>
        <p>
          The key is not to focus on perfection but on the process. Art helps you express emotions, unwind, and build resilience against stress.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'The Science of Self-Care: Why Rest is Productive',
    image: '/img/article3-1.png',
    summary: 'Self-care is more than just a buzzword. Dive into the science behind rest and how it boosts your productivity and mental health.',
    content: (
      <>
        <p>Rest and self-care are essential for physical and mental health. Research shows that regular breaks and intentional rest lead to higher productivity and well-being:</p>
        <ul>
          <li>
            <strong>The Role of Sleep:</strong> Sleep is critical for memory consolidation and cognitive function. Aim for 7–8 hours of quality sleep per night.
          </li>
          <li>
            <strong>Active Rest:</strong> Activities like yoga, stretching, or leisurely walks can help you recharge without feeling inactive.
          </li>
          <li>
            <strong>Setting Boundaries:</strong> Learn to say no to tasks that overwhelm you. Prioritize activities that nurture you.
          </li>
        </ul>
        <p>Self-care is not selfish. It’s a necessary investment in your health and productivity.</p>
      </>
    ),
  },
  {
    id: 4,
    title: 'The Power of Saying No: Setting Boundaries for a Healthier Life',
    image: '/img/article4.jpeg',
    summary:
      'Learn how setting boundaries can improve your well-being, protect your energy, and help you lead a more fulfilling life.',
    content: (
      <>
        <p>
          Many people struggle with saying no out of guilt, fear of rejection, or a desire to please others. However, overcommitting can lead to burnout, stress, and an inability to focus on what truly matters. Setting boundaries is a key aspect of self-care that allows you to prioritize your needs and well-being.
        </p>
        <p>
          According to psychologist <strong>Dr. Brené Brown</strong>, boundaries are essential for building healthy relationships and protecting your mental and emotional energy. Here’s why boundaries matter:
        </p>
        <ul>
          <li>
            <strong>Preserve Your Energy:</strong> Boundaries prevent you from feeling drained by activities or people that demand too much from you.
          </li>
          <li>
            <strong>Reduce Stress:</strong> By learning to say no, you can focus on commitments that align with your values and goals.
          </li>
          <li>
            <strong>Enhance Self-Respect:</strong> Setting boundaries teaches others how to treat you while reinforcing your own sense of self-worth.
          </li>
        </ul>
        <p>
          Start small—identify areas in your life where you feel overwhelmed and practice saying no with confidence. Remember, setting boundaries is not selfish; it’s a powerful act of self-care that allows you to lead a healthier, more intentional life.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: 'Sleep and Self-Care: Why Rest is a Non-Negotiable for Your Health',
    image: '/img/article5.jpeg',
    summary:
      'Understand the vital role of sleep in maintaining emotional balance, boosting mental clarity, and supporting a healthier, more balanced life.',
    content: (
      <>
        <p>
          Sleep is often overlooked in the self-care conversation, but it’s one of the most critical pillars of health. The brain undergoes essential maintenance during sleep: toxins are cleared, memories are consolidated, and emotional processing occurs. According to neuroscientist <strong>Dr. Matthew Walker</strong>, insufficient sleep impairs cognitive function, weakens the immune system, and heightens stress levels.
        </p>
        <p>
          Poor sleep can trigger mood swings, anxiety, and even depression. On the other hand, consistently getting <strong>7–9 hours</strong> of quality sleep promotes mental clarity, improves focus, and restores emotional balance.
        </p>
        <p>
          Creating a bedtime ritual can significantly improve your sleep quality. Here are a few simple strategies to help signal your body that it’s time to rest:
        </p>
        <ul>
          <li>Turn off screens at least an hour before bedtime to reduce blue light exposure.</li>
          <li>Dimming the lights and creating a calm environment can prepare your mind for rest.</li>
          <li>Practice deep breathing or light meditation to relax your body and release tension.</li>
        </ul>
        <p>
          Sleep is self-care in its purest form. By prioritizing rest, you’re giving yourself the energy and emotional resilience needed to navigate life’s challenges. Remember, quality sleep is not a luxury—it’s a non-negotiable part of living a healthy and balanced life.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: 'Digital Detox: Reclaiming Your Time and Focus',
    image: '/img/article6.jpeg',
    summary:
      'Explore how unplugging from screens can help you reconnect with yourself and improve your mental health.',
    content: (
      <>
        <p>
          In an age dominated by screens, from smartphones to laptops, digital overload has become a silent contributor to stress, fatigue, and mental fog. The average person spends up to 7 hours a day on screens, often unaware of its impact on their well-being. Prolonged screen time overstimulates the brain, disrupts sleep due to blue light exposure, and decreases focus by fragmenting attention across endless notifications.
        </p>
        <p>
          Taking a step back through a <strong>digital detox</strong> allows the mind to recalibrate. Scientific studies reveal that limiting screen time can improve cognitive function, enhance mood, and even boost creativity. Start with small steps like scheduling regular tech-free hours, where screens are replaced with grounding activities such as reading a book, practicing yoga, or engaging in mindful walks.
        </p>
        <p><strong>The benefits of unplugging are multifold:</strong></p>
        <ul>
          <li>
            <strong>Improved Sleep:</strong> Turning off devices an hour before bed helps regulate melatonin production, promoting restful sleep.
          </li>
          <li>
            <strong>Increased Focus:</strong> Breaking free from constant digital distractions restores your attention span, allowing deeper work and presence in conversations.
          </li>
          <li>
            <strong>Reconnecting with Self:</strong> Without the constant influx of social media and digital noise, you gain clarity, discover hidden hobbies, and foster creativity.
          </li>
        </ul>
        <p>
          For a transformative impact, try implementing a <strong>“Digital Detox Day”</strong> once a week. Spend the day engaging in analog activities: journaling, cooking a new recipe, meditating, or simply being present with loved ones. Set boundaries such as tech-free dinners, screen limits on apps, or creating a dedicated space at home where gadgets are not allowed.
        </p>
        <p>
          A digital detox isn’t about cutting off technology completely—it’s about regaining control over how and when you use it, leading to a healthier relationship with your devices and a clearer, calmer mind.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: 'The Healing Power of Nature: How Green Spaces Improve Mental Health',
    image: '/img/article7-3.jpg',
    summary:
      'Learn why spending time in nature can calm your mind, reduce stress, and improve your mood.',
    content: (
      <>
        <p>
          In a fast-paced world filled with urban noise, work stress, and digital fatigue, nature offers a sanctuary of calm and restoration. Psychologists and environmental studies agree: <strong>green spaces significantly improve mental and physical well-being</strong>. When you step outside into nature—whether it’s a forest, park, or garden—you’re giving your mind the opportunity to recharge in ways that indoor environments cannot.
        </p>
        <p>
          Studies show that time spent in nature lowers cortisol, the body’s stress hormone, while increasing serotonin and dopamine, the feel-good chemicals that improve mood and motivation. Activities like <strong>forest bathing</strong> (known as <em>shinrin-yoku</em> in Japan) demonstrate how merely immersing yourself in a natural environment can reduce anxiety, boost immune function, and enhance mental clarity. Exposure to natural sounds like rustling leaves, birdsong, and flowing water also activates the parasympathetic nervous system, signaling the body to relax.
        </p>
        <p><strong>Why does nature have such a profound effect?</strong></p>
        <ul>
          <li>
            <strong>Reduced Mental Fatigue:</strong> The gentle, non-demanding stimuli of nature allow the brain to rest, unlike city life or screens, which constantly demand attention.
          </li>
          <li>
            <strong>Mindfulness and Grounding:</strong> Activities like gardening, hiking, or even sitting by a lake encourage you to be present and mindful. Feeling the texture of soil, observing the play of sunlight, and inhaling fresh air engage your senses fully, creating a grounding effect.
          </li>
          <li>
            <strong>Improved Creativity:</strong> A break from overstimulation allows your brain’s <em>“default mode network”</em> to activate—this is where daydreaming and creative problem-solving happen.
          </li>
        </ul>
        <p>
          You don’t need a mountain range or vast forest to reap these benefits. Incorporating green elements into your daily life—like keeping houseplants, tending to a small garden, or walking in a nearby park—can make a difference. Research from Stanford University highlights that even <strong>20 minutes of daily exposure to nature</strong> can reduce symptoms of depression and anxiety.
        </p>
        <p>
          For a deeper connection, make it a habit to plan nature getaways: weekend hikes, beach visits, or outdoor picnics. These simple actions provide an escape from the noise of modern life and help you return with renewed focus and a calmer spirit. Nature, in its raw beauty, reminds us to slow down, breathe deeply, and rediscover the peace within ourselves.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: 'Aromatherapy 101: How Scents Influence Your Mood and Mind',
    image: '/img/article9.jpg',
    summary:
      'Discover how essential oils can reduce stress, enhance focus, and improve your emotional health.',
    content: (
      <>
        <p>
          Aromatherapy harnesses the power of scent to improve mental and emotional well-being. Using natural plant extracts, this ancient practice stimulates the <strong>olfactory nerve</strong>, which connects to the brain’s limbic system—the area responsible for emotions, memory, and stress responses.
        </p>
        <p>
          Different scents have unique effects on the mind and body. For example:
        </p>
        <ul>
          <li>
            <strong>Lavender:</strong> Promotes relaxation, reduces anxiety, and supports restful sleep.
          </li>
          <li>
            <strong>Peppermint:</strong> Increases focus, relieves headaches, and boosts energy levels.
          </li>
          <li>
            <strong>Citrus Oils (Lemon, Orange, Grapefruit):</strong> Uplift mood and combat fatigue, promoting a sense of positivity.
          </li>
          <li>
            <strong>Chamomile:</strong> Soothes emotional tension and promotes calmness.
          </li>
          <li>
            <strong>Eucalyptus:</strong> Clears the respiratory system while enhancing mental clarity and focus.
          </li>
        </ul>
        <p>
          Incorporating aromatherapy into your daily routine can be simple and effective. Use essential oils in <strong>diffusers</strong> to fill your space with calming or energizing scents, or add a few drops to a warm bath for deep relaxation. Diluted oils can also be applied topically to pulse points for quick mood regulation.
        </p>
        <p>
          Scientific research supports aromatherapy’s benefits. For instance, lavender oil has been shown to lower cortisol levels, while peppermint oil enhances cognitive performance. By integrating aromatherapy into mindfulness or self-care practices, you can create a sensory environment that fosters balance, focus, and emotional well-being.
        </p>
        <p>
          Whether you’re looking to unwind after a stressful day or recharge your energy, aromatherapy offers a simple yet powerful way to support your mind and body. Experiment with scents that resonate with you and let the healing power of nature’s aromas enhance your self-care routine.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: 'Self-Compassion vs. Self-Esteem: Why Being Kind to Yourself Matters More',
    image: '/img/article8-2.jpg',
    summary:
      'Learn the difference between self-esteem and self-compassion, and why the latter leads to greater emotional resilience.',
    content: (
      <>
        <p>
          For years, self-esteem has been seen as a foundation for mental well-being, encouraging individuals to build a positive self-image based on achievements or external validation. However, self-esteem can be fragile, fluctuating with success or failure. In contrast, <strong>self-compassion</strong> offers a more consistent and nurturing approach.
        </p>
        <p>
          According to <strong>Dr. Kristin Neff</strong>, self-compassion involves treating yourself with kindness, understanding, and acceptance—especially during challenging times. It shifts the focus from harsh self-judgment to recognizing that imperfection is part of being human.
        </p>
        <p><strong>The Three Pillars of Self-Compassion:</strong></p>
        <ul>
          <li>
            <strong>Self-Kindness:</strong> Replacing self-criticism with warmth and forgiveness, particularly in moments of failure or difficulty.
          </li>
          <li>
            <strong>Common Humanity:</strong> Recognizing that everyone struggles, and you’re not alone in facing setbacks or imperfections.
          </li>
          <li>
            <strong>Mindfulness:</strong> Acknowledging negative emotions without suppressing or over-identifying with them.
          </li>
        </ul>
        <p>
          Unlike self-esteem, which is tied to achievements and comparisons, self-compassion provides a steady foundation for emotional resilience. Research shows that self-compassion reduces anxiety, fosters emotional balance, and promotes healthier relationships.
        </p>
        <p>
          Practical ways to cultivate self-compassion include <strong>mindful reflection</strong> on critical self-talk, writing compassionate letters to yourself, and celebrating progress rather than perfection. By embracing self-compassion, you build a supportive inner voice that empowers you to face life’s challenges with grace and understanding.
        </p>
      </>
    ),
  },
];

const ContentLibrary = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (id) => {
    setSelectedArticle(articles.find((article) => article.id === id));
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Header />
      <main className={styles.mindfulReads}>
        <h2 className={styles.title}>Content Library</h2>
        <div className={styles.articles}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <Image src={article.image} alt={article.title} width={300} height={200} layout="responsive" />
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <button onClick={() => openArticle(article.id)}>Read More</button>
            </article>
          ))}
        </div>
      </main>

      {selectedArticle &&
        ReactDOM.createPortal(
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeArticle}>
                &times;
              </button>
              <h2>{selectedArticle.title}</h2>
              <Image src={selectedArticle.image} alt={selectedArticle.title} width={600} height={300} layout="intrinsic" />
              <div>{selectedArticle.content}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ContentLibrary;
