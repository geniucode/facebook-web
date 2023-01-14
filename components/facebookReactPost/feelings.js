const feelings = [
  { feeling: "amused", image: "amused.png" },
  { feeling: "alone", image: "alone.png" },
  { feeling: "angry", image: "angry.png" },
  { feeling: "awesome", image: "awesome.png" },
  { feeling: "annoyed", image: "annoyed.png" },
  { feeling: "amazing", image: "amazing.png" },
  { feeling: "amazed", image: "amazed.png" },
  { feeling: "accomolished", image: "accomolished.png" },
  { feeling: "ashamed", image: "ashamed.png" },
  { feeling: "asleep", image: "asleep.png" },
  { feeling: "alive", image: "alive.png" },
  { feeling: "aweful", image: "aweful.png" },
  { feeling: "awkward", image: "awkward.png" },
  { feeling: "appreciated", image: "appreciated.png" },
  { feeling: "anxious", image: "anxious.png" },
  { feeling: "aggraveted", image: "aggraveted.png" },
  { feeling: "afraid", image: "afraid.png" },
  { feeling: "awake", image: "awake.png" },
  { feeling: "blessed", image: "blessed.png" },
  { feeling: "blissful", image: "blissful.png" },
  { feeling: "bored", image: "bored.png" },
  { feeling: "bad", image: "bad.png" },
  { feeling: "broken", image: "broken.png" },
  { feeling: "beautiful", image: "beautiful.png" },
  { feeling: "better", image: "better.png" },
  { feeling: "blue", image: "blue.png" },
  { feeling: "busy", image: "busy.png" },
  { feeling: "blah", image: "blah.png" },
  { feeling: "betrayed", image: "betrayed.png" },
  { feeling: "broke", image: "broke.png" },
  { feeling: "bitter", image: "bitter.png" },
  { feeling: "brave", image: "brave.png" },
  { feeling: "butterflies", image: "butterflies.png" },
  { feeling: "bummed", image: "bummed.png" },
  { feeling: "crazy", image: "crazy.png" },
  { feeling: "cool", image: "cool.png" },
  { feeling: "chill", image: "chill.png" },
  { feeling: "confident", image: "confident.png" },
  { feeling: "cold", image: "cold.png" },
  { feeling: "cute", image: "cute.png" },
  { feeling: "calm", image: "calm.png" },
  { feeling: "confused", image: "confused.png" },
  { feeling: "concerned", image: "concerned.png" },
  { feeling: "curious", image: "curious.png" },
  { feeling: "comfortable", image: "comfortable.png" },
  { feeling: "creepy", image: "creepy.png" },
  { feeling: "challenged", image: "challenged.png" },
  { feeling: "cheated", image: "cheated.png" },
  { feeling: "connected", image: "connected.png" },
  { feeling: "clean", image: "clean.png" },
  { feeling: "content", image: "content.png" },
  { feeling: "creative", image: "creative.png" },
  { feeling: "cozy", image: "cozy.png" },
  { feeling: "complete", image: "complete.png" },
  { feeling: "craft", image: "craft.png" },
  { feeling: "conflicted", image: "conflicted.png" },
  { feeling: "done", image: "done.png" },
  { feeling: "desperate", image: "desperate.png" },
  { feeling: "devastated", image: "devastated.png" },
  { feeling: "disgusted", image: "disgusted.png" },
  { feeling: "dizzy", image: "dizzy.png" },
  { feeling: "discouraged", image: "discouraged.png" },
  { feeling: "defeated", image: "defeated.png" },
  { feeling: "dirty", image: "dirty.png" },
  { feeling: "deep", image: "deep.png" },
  { feeling: "drunk", image: "drunk.png" },
  { feeling: "different", image: "different.png" },
  { feeling: "dumb", image: "dumb.png" },
  { feeling: "depressed", image: "depressed.png" },
  { feeling: "down", image: "down.png" },
  { feeling: "disappointed", image: "disappointed.png" },
  { feeling: "determined", image: "determined.png" },
  { feeling: "drained", image: "drained.png" },
  { feeling: "delighted", image: "delighted.png" },
  { feeling: "excited", image: "excited.png" },
  { feeling: "emotional", image: "emotional.png" },
  { feeling: "exhausted", image: "exhausted.png" },
  { feeling: "energized", image: "energized.png" },
  { feeling: "embarrassed", image: "embarrassed.png" },
  { feeling: "evil", image: "evil.png" },
  { feeling: "empowered", image: "empowered.png" },
  { feeling: "ecstatic", image: "ecstatic.png" },
  { feeling: "enraged", image: "enraged.png" },
  { feeling: "fantastic", image: "fantastic.png" },
  { feeling: "festive", image: "festive.png" },
  { feeling: "fresh", image: "fresh.png" },
  { feeling: "fabulous", image: "fabulous.png" },
  { feeling: "funny", image: "funny.png" },
  { feeling: "fed up", image: "fedUp.png" },
  { feeling: "furious", image: "furious.png" },
  { feeling: "frustrated", image: "frustrated.png" },
  { feeling: "free", image: "free.png" },
  { feeling: "fine", image: "fine.png" },
  { feeling: "full", image: "full.png" },
  { feeling: "funky", image: "funky.png" },
  { feeling: "fortunate", image: "fortunate.png" },
  { feeling: "fat", image: "fat.png" },
  { feeling: "flirty", image: "flirty.png" },
  { feeling: "focused", image: "focused.png" },
  { feeling: "frozen", image: "frozen.png" },
  { feeling: "freezing", image: "freezing.png" },
  { feeling: "grateful", image: "grateful.png" },
  { feeling: "glad", image: "glad.png" },
  { feeling: "great", image: "great.png" },
  { feeling: "goofy", image: "goofy.png" },
  { feeling: "good", image: "good.png" },
  { feeling: "guilty", image: "guilty.png" },
  { feeling: "generous", image: "generous.png" },
  { feeling: "gross", image: "gross.png" },
  { feeling: "grumpy", image: "grumpy.png" },
  { feeling: "giddy", image: "giddy.png" },
  { feeling: "happy", image: "happy.png" },
  { feeling: "hopeful", image: "hopeful.png" },
  { feeling: "heartbroken", image: "heartbroken.png" },
  { feeling: "hungry", image: "hungry.png" },
  { feeling: "hyper", image: "hyper.png" },
  { feeling: "horrible", image: "horrible.png" },
  { feeling: "human", image: "human.png" },
  { feeling: "hurt", image: "hurt.png" },
  { feeling: "helpless", image: "helpless.png" },
  { feeling: "hopeless", image: "hopeless.png" },
  { feeling: "honored", image: "honored.png" },
  { feeling: "hungover", image: "hungover.png" },
  { feeling: "healthy", image: "healthy.png" },
  { feeling: "homesick", image: "homesick.png" },
  { feeling: "in love", image: "inLove.png" },
  { feeling: "inspired", image: "inspired.png" },
  { feeling: "irritated", image: "irritated.png" },
  { feeling: "incomplete", image: "incomplete.png" },
  { feeling: "insecure", image: "insecure.png" },
  { feeling: "important", image: "important.png" },
  { feeling: "impatient", image: "impatient.png" },
  { feeling: "ignored", image: "ignored.png" },
  { feeling: "invisible", image: "invisible.png" },
  { feeling: "inadequate", image: "inadequate.png" },
  { feeling: "insulted", image: "insulted.png" },
  { feeling: "ill", image: "ill.png" },
  { feeling: "impressed", image: "impressed.png" },
  { feeling: "joyful", image: "joyful.png" },
  { feeling: "jolly", image: "jolly.png" },
  { feeling: "jealous", image: "jealous.png" },
  { feeling: "kind", image: "kind.png" },
  { feeling: "loved", image: "loved.png" },
  { feeling: "lovely", image: "lovely.png" },
  { feeling: "lucky", image: "lucky.png" },
  { feeling: "lonely", image: "lonely.png" },
  { feeling: "low", image: "low.png" },
  { feeling: "lost", image: "lost.png" },
  { feeling: "lazy", image: "lazy.png" },
  { feeling: "light", image: "light.png" },
  { feeling: "lame", image: "lame.png" },
  { feeling: "lousy", image: "lousy.png" },
  { feeling: "motivated", image: "motivated.png" },
  { feeling: "missing", image: "missing.png" },
  { feeling: "mischievous", image: "mischievous.png" },
  { feeling: "meh", image: "meh.png" },
  { feeling: "miserable", image: "miserable.png" },
  { feeling: "mad", image: "mad.png" },
  { feeling: "mighty", image: "mighty.png" },
  { feeling: "nostalgic", image: "nostalgic.png" },
  { feeling: "normal", image: "normal.png" },
  { feeling: "nice", image: "nice.png" },
  { feeling: "nervous", image: "nervous.png" },
  { feeling: "naked", image: "naked.png" },
  { feeling: "nauseous", image: "nauseous.png" },
  { feeling: "numb", image: "numb.png" },
  { feeling: "neglected", image: "neglected.png" },
  { feeling: "needed", image: "needed.png" },
  { feeling: "naughty", image: "naughty.png" },
  { feeling: "nerdy", image: "nerdy.png" },
  { feeling: "OK", image: "OK.png" },
  { feeling: "optimistic", image: "optimistic.png" },
  { feeling: "old", image: "old.png" },
  { feeling: "overwhelmed", image: "overwhelmed.png" },
  { feeling: "offended", image: "offended.png" },
  { feeling: "okay", image: "okay.png" },
  { feeling: "positive", image: "positive.png" },
  { feeling: "proud", image: "proud.png" },
  { feeling: "professional", image: "professional.png" },
  { feeling: "pained", image: "pained.png" },
  { feeling: "peaceful", image: "peaceful.png" },
  { feeling: "pumped", image: "pumped.png" },
  { feeling: "pissed off", image: "pissedOff.png" },
  { feeling: "puzzled", image: "puzzled.png" },
  { feeling: "pissed", image: "pissed.png" },
  { feeling: "perplexed", image: "perplexed.png" },
  { feeling: "pretty", image: "pretty.png" },
  { feeling: "privileged", image: "privileged.png" },
  { feeling: "perfect", image: "perfect.png" },
  { feeling: "productive", image: "productive.png" },
  { feeling: "qualified", image: "qualified.png" },
  { feeling: "relaxed", image: "relaxed.png" },
  { feeling: "refreshed", image: "refreshed.png" },
  { feeling: "rough", image: "rough.png" },
  { feeling: "ready", image: "ready.png" },
  { feeling: "relieved", image: "relieved.png" },
  { feeling: "rested", image: "rested.png" },
  { feeling: "regret", image: "regret.png" },
  { feeling: "rich", image: "rich.png" },
  { feeling: "restless", image: "restless.png" },
  { feeling: "renewed", image: "renewed.png" },
  { feeling: "romantic", image: "romantic.png" },
  { feeling: "sad", image: "sad.png" },
  { feeling: "silly", image: "silly.png" },
  { feeling: "sick", image: "sick.png" },
  { feeling: "sleepy", image: "sleepy.png" },
  { feeling: "sorry", image: "sorry.png" },
  { feeling: "super", image: "ssuper.png" },
  { feeling: "satisfied", image: "satisfied.png" },
  { feeling: "sarcastic", image: "sarcastic.png" },
  { feeling: "strong", image: "strong.png" },
  { feeling: "special", image: "special.png" },
  { feeling: "stressed", image: "stressed.png" },
  { feeling: "surprised", image: "surprised.png" },
  { feeling: "safe", image: "safe.png" },
  { feeling: "stupid", image: "stupid.png" },
  { feeling: "shy", image: "shy.png" },
  { feeling: "secure", image: "secure.png" },
  { feeling: "scared", image: "scared.png" },
  { feeling: "sore", image: "sore.png" },
  { feeling: "small", image: "small.png" },
  { feeling: "stuck", image: "stuck.png" },
  { feeling: "strange", image: "strange.png" },
  { feeling: "smart", image: "smart.png" },
  { feeling: "shame", image: "shame.png" },
  { feeling: "shattered", image: "shattered.png" },
  { feeling: "stuffed", image: "stuffed.png" },
  { feeling: "shocked", image: "shocked.png" },
  { feeling: "spooky", image: "spooky.png" },
  { feeling: "stoked", image: "stoked.png" },
  { feeling: "spoiled", image: "spoiled.png" },
  { feeling: "sneaky", image: "sneaky.png" },
  { feeling: "thankful", image: "thankful.png" },
  { feeling: "tired", image: "tired.png" },
  { feeling: "thoughtful", image: "thoughtful.png" },
  { feeling: "terrible", image: "terrible.png" },
  { feeling: "trapped", image: "trapped.png" },
  { feeling: "thirsty", image: "thirsty.png" },
  { feeling: "threatened", image: "threatened.png" },
  { feeling: "tipsy", image: "tipsy.png" },
  { feeling: "uncomfortable", image: "uncomfortable.png" },
  { feeling: "unimportant", image: "unimportant.png" },
  { feeling: "unwanted", image: "unwanted.png" },
  { feeling: "unloved", image: "unloved.png" },
  { feeling: "useless", image: "useless.png" },
  { feeling: "upset", image: "upset.png" },
  { feeling: "uneasy", image: "uneasy.png" },
  { feeling: "unwell", image: "unwell.png" },
  { feeling: "unappreciated", image: "unappreciated.png" },
  { feeling: "unhappy", image: "unhappy.png" },
  { feeling: "undecided", image: "undecided.png" },
  { feeling: "unsure", image: "unsure.png" },
  { feeling: "ugly", image: "ugly.png" },
  { feeling: "wonderful", image: "wonderful.png" },
  { feeling: "worried", image: "worried.png" },
  { feeling: "welcome", image: "welcome.png" },
  { feeling: "worse", image: "worse.png" },
  { feeling: "well", image: "well.png" },
  { feeling: "weird", image: "weird.png" },
  { feeling: "warm", image: "warm.png" },
  { feeling: "weak", image: "weak.png" },
  { feeling: "worthless", image: "worthless.png" },
  { feeling: "whole", image: "whole.png" },
  { feeling: "wanted", image: "wanted.png" },
  { feeling: "welcomed", image: "welcomed.png" },
  { feeling: "wet", image: "wet.png" },
  { feeling: "yucky", image: "yucky.png" },
  { feeling: "young", image: "young.png" },
];

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "/components/facebookReactPost/images/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export { feelings };
