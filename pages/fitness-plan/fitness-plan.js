Page({
  data: {
    phase: null,
    currentWeek: null,
    weekTabs: [],
    weekData: {
      1: {
        theme: 'Movement Foundations',
        rationale: 'Week 1 establishes motor patterns. Every rep is about technique, not speed. CNS adaptation begins in week 1 — quality over quantity.',
        badge: 'Low Volume · Technique Focus',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Jog + Side Shuffles', detail: '2 laps jog → 2×10m shuffle each side', sets: '2 rounds' },
              { n: 'Leg Swings (front/side)', detail: 'Hip flexor mobility · 10 each direction', sets: '10 each' },
              { n: 'High Knees (slow)', detail: 'Focus on posture · arms at 90°', sets: '2×15m' },
              { n: 'Arm Circles + Wrist Rolls', detail: 'Shoulder prep', sets: '10 fwd/bk' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Dead Bug', detail: 'Lower opposite arm + leg simultaneously · neutral spine · exhale on effort', sets: '2×8 reps' },
              { n: 'Plank Hold', detail: 'Elbows under shoulders · squeeze glutes · flat back', sets: '2×20 sec' },
              { n: 'Glute Bridge', detail: 'Drive hips up, hold 2 sec at top · single-leg option if easy', sets: '2×10' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Ladder — 2-Foot Run', detail: 'Both feet in each rung · upright posture · arms pumping', sets: '4 passes' },
              { n: 'Cone Shuffle (5m×4)', detail: 'Side shuffle between 4 cones spaced 5m · stay low', sets: '3 rounds' },
              { n: 'Reaction Start', detail: 'Partner calls “go” · sprint 5m from athletic stance', sets: '6 reps' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Squat Jump', detail: 'Controlled descent → explosive jump · land soft', sets: '2×6' },
              { n: 'Standing Broad Jump', detail: 'Two-foot takeoff · reach forward · stick landing 2 sec', sets: '2×4' },
              { n: 'Med Ball Chest Pass', detail: 'Athletic stance · push through the ball · 2–3kg', sets: '2×6' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Hip Flexor Stretch', detail: 'Lunge position · tall posture · hold 30s each side', sets: '1×30s' },
              { n: 'Seated Hamstring Stretch', detail: 'Reach toward toes · hold without bouncing', sets: '1×30s' },
              { n: 'Child\'s Pose + Thread Needle', detail: 'T-spine rotation and lat stretch', sets: '1×30s each' },
              { n: 'Slow Diaphragmatic Breathing', detail: '4 count in · 4 hold · 6 count out · parasympathetic reset', sets: '5 breaths' }
            ]
          }
        ]
      },
      2: {
        theme: 'Pattern Reinforcement',
        rationale: 'Week 2 adds one set to core and power. Introduce unilateral movements to address asymmetries common in youth athletes.',
        badge: 'Moderate Volume · Add Unilateral',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Jog + Carioca', detail: '2 laps jog → 2×15m carioca · hip rotation emphasis', sets: '2 rounds' },
              { n: 'World\'s Greatest Stretch', detail: 'Lunge + rotation · open the hip fully', sets: '5 each side' },
              { n: 'Lateral Band Walk', detail: 'Light resistance band around ankles · 10 steps each way', sets: '2×10' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Dead Bug (arm only variation)', detail: 'Extend opposite arm only · 4-sec lower · maintain lumbar flat', sets: '3×8' },
              { n: 'Plank + Shoulder Tap', detail: 'Minimize hip rotation · squeeze core hard · alternate taps', sets: '3×8 taps' },
              { n: 'Single-Leg Glute Bridge', detail: 'Opposite leg straight up · drive through heel · 2s hold at top', sets: '2×8 each' },
              { n: 'Side Plank Hold', detail: 'Hip stacked · elbow under shoulder · maintain straight line', sets: '2×15s each' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Ladder — Icky Shuffle', detail: 'In-in-out pattern · start slow · precision before speed', sets: '4 passes' },
              { n: 'T-Drill', detail: 'Sprint 5m → shuffle 2.5m R → shuffle 5m L → shuffle 2.5m R → back-pedal 5m', sets: '4 reps' },
              { n: 'Cone Weave Sprint', detail: 'Set 6 cones 1m apart · weave at 70% effort', sets: '4 passes' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Box Jump (low, 8–12in)', detail: 'Two-foot takeoff · land on toes → heel · step down', sets: '3×5' },
              { n: 'Lateral Bound', detail: 'Single-leg push → land opposite leg · stick 2s', sets: '2×5 each' },
              { n: 'Med Ball Slam (overhead)', detail: 'Raise overhead → slam floor hard · full body involvement', sets: '3×5' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Quad Stretch (standing)', detail: 'Heel to glute · hold wall if needed · 30s each', sets: '1×30s' },
              { n: 'Pigeon Pose', detail: 'Deep hip opener · excellent for basketball players', sets: '1×30s each' },
              { n: 'Thoracic Rotation (seated)', detail: 'Hands behind head · rotate both ways', sets: '8 each way' }
            ]
          }
        ]
      },
      3: {
        theme: 'Complexity & Load',
        rationale: 'Week 3 introduces combined movements. Supersets begin (core + agility circuit with minimal rest). Power reps increase slightly.',
        badge: 'Moderate-High · Superset Intro',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Jump Rope', detail: '2 min continuous · alternate single/double foot', sets: '2 min' },
              { n: 'Inchworm + Push-Up', detail: 'Walk hands out to plank → 1 push-up → walk back', sets: '6 reps' },
              { n: 'Ankle Circles + Calf Raises', detail: 'Prep for landing loads ahead', sets: '10+10' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Plank to Down-Dog', detail: 'From plank: push hips up to pike → return · no hip sag', sets: '3×8' },
              { n: 'Bird Dog', detail: 'Opposite arm + leg extend → pause → return SLOWLY · anti-rotation', sets: '3×8 each' },
              { n: 'Copenhagen Side Plank (modified)', detail: 'Top foot on low bench · full side plank · builds adductor strength', sets: '2×10s each' },
              { n: 'Hollow Body Hold', detail: 'Lower back pressed down · arms + legs off ground · hold', sets: '3×15s' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Ladder — Lateral 2-in', detail: 'Side-facing · two feet in each rung moving laterally', sets: '4 passes each dir' },
              { n: '5-10-5 Shuttle', detail: 'Start center · sprint 5m R → touch → sprint 10m L → touch → sprint 5m R', sets: '4 reps' },
              { n: 'Reaction Cone', detail: 'Coach points direction · athlete reacts and sprints to cone', sets: '8 reps' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Jump Squat × Stick Landing', detail: 'Max effort jump → stick landing → hold 2s', sets: '3×5' },
              { n: 'Single-Leg Hop (forward)', detail: 'Push off one leg · land same leg · absorb', sets: '2×4 each' },
              { n: 'Med Ball Rotational Throw (wall)', detail: 'Pivot from hip · rotate through core · throw side-on', sets: '3×5 each side' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Standing Figure-4 Stretch', detail: 'Glute/piriformis · key for jump landing athletes', sets: '1×30s each' },
              { n: 'Band-Assisted Hamstring Stretch', detail: 'Resistance band around foot · gentle pull', sets: '1×30s each' },
              { n: 'Box Breathing', detail: '4 in · 4 hold · 4 out · 4 hold', sets: '6 rounds' }
            ]
          }
        ]
      },
      4: {
        theme: 'Phase 1 Integration',
        rationale: 'Week 4 is a deload-ish testing week. Reduce volume by 20%, focus on quality and optional assessments.',
        badge: 'Consolidation · Light Deload',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Dynamic Movement Circuit', detail: 'High knees → butt kicks → skips → lateral shuffles · continuous flow', sets: '2 rounds' },
              { n: 'Hip 90/90 Mobility', detail: 'Seated hip rotation · key for lateral movement quality', sets: '8 each way' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Plank Circuit (3-way)', detail: 'Forearm plank 20s → R side 20s → L side 20s → rest', sets: '2 rounds' },
              { n: 'Bird Dog (5s pause)', detail: 'Maximize anti-rotation · pause at full extension', sets: '3×6 each' },
              { n: 'Stir the Pot (optional)', detail: 'Forearms on medicine ball · small circles · advanced stability', sets: '2×8 each dir' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Best Patterns Medley', detail: 'Choose 3 best ladder patterns from wks 1–3 · perfection focus', sets: '6 total passes' },
              { n: 'T-Drill Time Trial', detail: 'Record best time — baseline for Phase 2 tracking', sets: '3 timed reps' },
              { n: 'Mirror Drill (paired)', detail: 'Partner leads movements · athlete shadows', sets: '3×15s rounds' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Broad Jump Distance Test', detail: 'Record best of 3 · mark distance with tape', sets: '3 attempts' },
              { n: 'Box Jump (from wk 2 height)', detail: 'Smooth and confident · no fear', sets: '2×5' },
              { n: 'Med Ball Complex', detail: '3 throws: chest pass → slam → rotational · rest · repeat', sets: '2 complexes' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Full Body Stretch Flow', detail: 'Hamstrings → hip flexors → glutes → thoracic → shoulders', sets: '30s each' },
              { n: 'Reflection Circle', detail: 'Team gathers · coach asks: what improved this month?', sets: '2 min' }
            ]
          }
        ]
      },
      5: {
        theme: 'Power Amplification',
        rationale: 'Phase 2 begins. Foundation is built — now intensity increases and reactive agility is introduced.',
        badge: 'High Intensity · Reactive Agility',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Acceleration Sprints', detail: 'Walk 5m → jog 5m → stride 5m → 80% sprint 10m → walk back', sets: '4 reps' },
              { n: 'Lateral Lunge + Reach', detail: 'Deep lateral lunge · reach inside foot · thoracic rotation', sets: '8 each side' },
              { n: 'Ankle Pops / Mini Hops', detail: 'Rapid tiny hops · warm up achilles/calf', sets: '2×15' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Plank with Band Pull-Through', detail: 'Band at side · pull through under body · resist rotation', sets: '3×8 each' },
              { n: 'RKC Plank', detail: 'Squeeze EVERYTHING · shorter hold but maximal tension', sets: '3×10s' },
              { n: 'Pallof Press', detail: 'Band at chest height · press out → hold → return', sets: '3×8 each side' },
              { n: 'V-Sit Hold', detail: 'Sit on tailbone · legs + torso off ground · L shape', sets: '3×15s' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Ladder — Hop Scotch + Sprint Out', detail: 'Complete pattern → explode sprint 5m out of last rung', sets: '5 passes' },
              { n: 'Random Cone Reaction', detail: 'Coach points random cone · athlete sprints → touch → return', sets: '8 reps' },
              { n: 'Defensive Shuffle + Close-Out', detail: 'Shuffle defensively 5m → close-out sprint to cone', sets: '5 each dir' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Depth Jump', detail: 'Step off 8–12in box · land · immediately jump up', sets: '3×4' },
              { n: 'Bounding (3-bound sequence)', detail: 'R-R-R or R-L-R alternating · triple extension', sets: '3×4 sequences' },
              { n: 'Med Ball Overhead Throw', detail: 'Explosive total body hip extension', sets: '3×4' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Prone Hip Flexor Stretch', detail: 'Lying down variant · deeper than standing', sets: '1×30s' },
              { n: 'Seated Spinal Twist', detail: 'Hands behind head · rotate both ways', sets: '1×30s each' },
              { n: 'Slow 4-7-8 Breathing', detail: '4 in · 7 hold · 8 out · activates recovery', sets: '5 rounds' }
            ]
          }
        ]
      },
      6: {
        theme: 'Basketball Power Specificity',
        rationale: 'Week 6 links fitness to basketball. Agility and power drills now use sport-specific movements.',
        badge: 'Sport-Specific Transfer',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Ball-Handling Movement Warm-Up', detail: 'Dribble while performing movement patterns · low dribble', sets: '3 min' },
              { n: 'Defensive Footwork Drill', detail: 'Zig-zag defensive shuffle across court · low hips', sets: '4 lengths' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Anti-Rotation Chop', detail: 'Band overhead diagonal → chop across body', sets: '3×8 each side' },
              { n: 'Plank to Push-Up', detail: 'Down-up × 4 → R side plank → return → L side', sets: '3 rounds' },
              { n: 'Copenhagen Plank (full)', detail: 'Full foot on bench · hold side plank', sets: '3×15s each' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Jab Step → Drive Reaction', detail: 'Start in triple-threat · react to call · drive to cone', sets: '8 reps' },
              { n: 'Full-Court Defensive Zigzag', detail: 'Continuous defensive shuffle full court', sets: '4 lengths' },
              { n: 'Closeout to Contest Sprint', detail: 'Sprint, stop, hands up · stick the decel', sets: '6 reps' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Two-Foot Vertical Jump', detail: 'Max effort · track height progress', sets: '3×5' },
              { n: 'One-Step Approach Jump', detail: 'Simulate lay-up approach · max vertical', sets: '3×4 each side' },
              { n: 'Med Ball Pivot + Chest Pass', detail: 'Pivot off one foot · explosive pass', sets: '3×6 each' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Butterfly + Forward Fold', detail: 'Groin and inner thigh stretch', sets: '1×30s' },
              { n: 'Calf + Achilles Stretch', detail: 'Straight and bent knee variants', sets: '1×30s each' },
              { n: 'Mental Rehearsal', detail: 'Visualize two elite basketball movements', sets: '1×30s' }
            ]
          }
        ]
      },
      7: {
        theme: 'Peak Volume',
        rationale: 'Week 7 is the highest volume week. Athletes should feel challenged but capable.',
        badge: 'Peak Load · Maximum Stimulus',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Rope Jump Complex', detail: '30s single bounce → 15s double unders attempt → 15s single', sets: '2 rounds' },
              { n: 'Hip Flexor + T-Spine Flow', detail: 'Moving lunge → rotate → hip circle', sets: '6 each side' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Dead Bug Progression', detail: 'Full extension · 5s eccentric lower', sets: '4×6' },
              { n: 'Plank Complex Circuit', detail: 'Forearm → side R → side L → reverse plank · 20s each', sets: '3 circuits' },
              { n: 'Pallof Press + Overhead', detail: 'Press then extend overhead · return with control', sets: '3×6 each side' },
              { n: 'Single-Leg Romanian DL', detail: 'Hip hinge on one leg · flat back', sets: '3×8 each' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'Full Speed Ladder Medley', detail: 'Best 4 patterns back-to-back', sets: '3 medleys' },
              { n: 'Chase/Evasion Drill', detail: 'Pairs within 3m grid · simulates on-ball defense', sets: '4×10s' },
              { n: '5-10-5 Time Trial', detail: 'Record time — compare to wk 3 baseline', sets: '3 timed runs' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Depth Jump to Broad Jump', detail: 'Step off box → land → immediately broad jump', sets: '3×3' },
              { n: 'Lateral Bounding', detail: 'Push R → land L → push L → land R · 4 bounds', sets: '3×4 bounds' },
              { n: 'MB Scoop Toss', detail: 'Hinge → explosive toss forward', sets: '3×5' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Full-Body Foam Roll Flow', detail: 'Thoracic spine → glutes → IT band → calf', sets: '30s each' },
              { n: '90/90 Hip Stretch', detail: 'Both hips in 90° angle', sets: '1×30s each' },
              { n: 'Team Debrief', detail: 'What was hardest? What felt most improved?', sets: '2 min' }
            ]
          }
        ]
      },
      8: {
        theme: 'Test & Celebrate',
        rationale: 'Week 8 is a taper week with fitness tests, reflection, and celebration.',
        badge: 'Taper · Assessment · Transition',
        segments: [
          {
            label: 'Warm-Up',
            time: '5 min',
            exercises: [
              { n: 'Movement Celebration Warm-Up', detail: 'Team-chosen favorite warm-up exercises · high energy', sets: '5 min' }
            ]
          },
          {
            label: 'Core Stability',
            time: '7 min',
            exercises: [
              { n: 'Plank Hold — Max Time Test', detail: 'Record personal best · compare to week 1', sets: '1 max hold' },
              { n: 'Best Core Circuit', detail: 'Choose 3 favorite core exercises from 8 weeks', sets: '2 rounds' }
            ]
          },
          {
            label: 'Agility',
            time: '8 min',
            exercises: [
              { n: 'T-Drill Final', detail: 'Compare to Week 4 baseline', sets: '3 timed reps' },
              { n: '5-10-5 Final', detail: 'Compare to Week 7', sets: '3 timed reps' },
              { n: 'Free Agility Play', detail: 'Mini-game reaction tag in small grid', sets: '5 min' }
            ]
          },
          {
            label: 'Power',
            time: '7 min',
            exercises: [
              { n: 'Broad Jump Final Test', detail: 'Compare to Week 4 distance', sets: '3 attempts' },
              { n: 'Vertical Jump Test', detail: 'Wall touch method; compare to week 6', sets: '3 attempts' },
              { n: 'Power Showcase', detail: 'Each player demos their most improved movement', sets: '1 each' }
            ]
          },
          {
            label: 'Cool-Down',
            time: '5 min',
            exercises: [
              { n: 'Full Stretch Circuit', detail: 'All major muscle groups · relaxed pace', sets: '30s each' },
              { n: '8-Week Reflection Circle', detail: 'What did you learn? What will you carry into the season?', sets: '5 min' }
            ]
          }
        ]
      }
    }
  },

  onLoad() {
    this.setData({
      phase: null,
      weekTabs: [],
      currentWeek: null
    });
  },

  showPhase(e) {
    const phase = Number(e.currentTarget.dataset.phase);
    const weekTabs = phase === 1 ? [1, 2, 3, 4] : [5, 6, 7, 8];
    this.setData({
      phase,
      weekTabs,
      currentWeek: weekTabs[0]
    });
  },

  showWeek(e) {
    const week = Number(e.currentTarget.dataset.week);
    this.setData({
      currentWeek: week
    });
  },

  returnToPhases() {
    this.setData({
      phase: null,
      weekTabs: [],
      currentWeek: null
    });
  }
});
