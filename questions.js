const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "How does a focused assessment differ most from a complete health assessment?",
    "options": {
      "A": "It targets a specific problem area rather than covering all body systems",
      "B": "It skips documentation because time is limited on the unit",
      "C": "It is only ever performed by nurse practitioners in clinics",
      "D": "It replaces the need for any future complete assessment"
    },
    "answer": "A",
    "explanation": "A focused assessment narrows the scope to a specific concern, unlike a complete assessment that examines all systems; documentation is still required, and RNs and RPNs also perform focused assessments."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "A community health nurse checks blood pressure at a mall kiosk. What type of assessment is this?",
    "options": {
      "A": "A screening assessment aimed at detecting risk in a broad population",
      "B": "A complete assessment covering every major body system",
      "C": "A focused assessment tied to an established diagnosis",
      "D": "An emergency assessment following the primary survey format"
    },
    "answer": "A",
    "explanation": "Screening assessments target one measure in a broad, often asymptomatic population to detect risk early, unlike focused or complete assessments tied to a known problem or full workup."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "Within the RN, RPN, and NP continuum, what best distinguishes the NP's assessment scope?",
    "options": {
      "A": "NPs can diagnose conditions and order diagnostic tests independently",
      "B": "NPs are the only providers permitted to perform physical assessment",
      "C": "NPs must supervise every assessment an RN completes on a unit",
      "D": "NPs assess only in hospital settings, never in the community"
    },
    "answer": "A",
    "explanation": "NPs hold an expanded scope that includes diagnosing and ordering tests, while RNs and RPNs also independently perform physical assessment within their own scopes."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "In the nursing process, where does physical assessment data most directly inform the next step?",
    "options": {
      "A": "Assessment findings shape the nursing diagnoses formed afterward",
      "B": "Assessment findings are recorded only after evaluation is complete",
      "C": "Assessment occurs solely after interventions have been implemented",
      "D": "Assessment replaces the need to plan individualized nursing care"
    },
    "answer": "A",
    "explanation": "Assessment is the first step of the nursing process, and its findings directly shape the nursing diagnoses that follow; it is not performed after evaluation or intervention."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "What is a common challenge nurses face performing assessments in busy urban acute care settings?",
    "options": {
      "A": "High patient volume and time pressure can shorten assessment depth",
      "B": "A complete absence of any diagnostic equipment on the unit",
      "C": "A total lack of interpreter services within city hospitals",
      "D": "Legal accountability for documentation does not apply there"
    },
    "answer": "A",
    "explanation": "Urban settings often have high patient volumes and productivity pressures that compress assessment time, whereas equipment and interpreter access are typically more available than in remote areas, and documentation standards still apply."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "Why must nurses in rural and small hospitals often function with a broader generalist assessment skill set?",
    "options": {
      "A": "Specialist consultation and diagnostic resources are less immediately available",
      "B": "Provincial legislation restricts rural nurses from performing assessments",
      "C": "Rural patients present with a narrower range of health conditions",
      "D": "Small hospitals are exempt from standard documentation requirements"
    },
    "answer": "A",
    "explanation": "Limited access to specialists and on-site diagnostics means rural and small-hospital nurses must rely more heavily on their own assessment judgment before arranging transfer, not because of any legal restriction or narrower case mix."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "What factor most complicates assessment and follow-up care in fly-in northern communities?",
    "options": {
      "A": "Limited transportation and diagnostic access can delay definitive care",
      "B": "Federal and provincial jurisdiction never overlaps in these communities",
      "C": "Nurses in these settings are prohibited from using telehealth",
      "D": "Screening assessments are not permitted outside hospital settings"
    },
    "answer": "A",
    "explanation": "Fly-in access and limited on-site diagnostics can delay definitive care and transfer, while telehealth is actually a key tool used, and jurisdictional overlap between federal and provincial systems is a real complicating factor on-reserve."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "Why is thorough documentation of assessment findings considered a legal safeguard for nurses?",
    "options": {
      "A": "It creates a record showing that care met the expected standard",
      "B": "It guarantees that a nurse cannot ever be named in a lawsuit",
      "C": "It is optional once a verbal report has been given to colleagues",
      "D": "It matters only in complete assessments, not focused ones"
    },
    "answer": "A",
    "explanation": "Documentation provides evidence that assessment and care met the standard of practice; it does not guarantee immunity from legal action and is required for focused assessments as well."
  },
  {
    "id": 9,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "Why is health assessment considered its own distinct nursing competency rather than a routine task?",
    "options": {
      "A": "It requires clinical reasoning to interpret findings and guide care",
      "B": "It is a skill needed only during initial nursing education",
      "C": "It applies exclusively to physical findings, never psychosocial ones",
      "D": "It is performed identically regardless of patient context or setting"
    },
    "answer": "A",
    "explanation": "Assessment demands ongoing clinical judgment to interpret findings within context, is used throughout a nursing career, includes psychosocial dimensions, and varies by patient and setting."
  },
  {
    "id": 10,
    "chapter": 1,
    "domain": "Foundations of Assessment",
    "question": "An RPN caring for a stable client on a step-down unit identifies a new focal concern. What should guide the RPN's next action?",
    "options": {
      "A": "Perform a focused assessment within the RPN scope of practice",
      "B": "Refuse to assess and wait exclusively for an NP to arrive",
      "C": "Conduct a full screening assessment across the entire population",
      "D": "Avoid documenting the finding until a physician is present"
    },
    "answer": "A",
    "explanation": "RPNs are competent to perform focused assessments within their defined scope; delaying assessment or documentation is inappropriate, and a population-level screening assessment is not the correct response to an individual finding."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "What does the 'O' in the OPQRSTU symptom analysis framework represent?",
    "options": {
      "A": "Onset, referring to when the symptom first began",
      "B": "Objective data gathered only through physical examination",
      "C": "Outcome, referring to the result of prior treatment",
      "D": "Observation made solely by a family member present"
    },
    "answer": "A",
    "explanation": "OPQRSTU begins with Onset, capturing when the symptom started; the other options describe unrelated concepts not represented by the O in this mnemonic."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "Which technique best exemplifies core therapeutic communication during a health history interview?",
    "options": {
      "A": "Using open-ended questions to let the patient elaborate freely",
      "B": "Asking a rapid series of closed yes-or-no questions only",
      "C": "Interrupting to redirect the patient toward the next topic",
      "D": "Filling every silence immediately to keep the pace moving"
    },
    "answer": "A",
    "explanation": "Open-ended questions encourage patients to share in their own words, a core therapeutic technique, while closed questioning, interrupting, and eliminating silence tend to limit disclosure."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "In the structure of a complete health history, where does the history of present illness typically fit?",
    "options": {
      "A": "It follows the chief complaint and expands on the current concern",
      "B": "It is documented only within the past medical history section",
      "C": "It always precedes collection of biographical data",
      "D": "It is omitted whenever a review of systems is completed"
    },
    "answer": "A",
    "explanation": "The history of present illness expands on the chief complaint and comes after it in the standard structure; it is a distinct section from past medical history and is not replaced by the review of systems."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "What is the best practice when a patient with limited English proficiency needs a health history taken?",
    "options": {
      "A": "Use a trained medical interpreter rather than an available family member",
      "B": "Rely on a young family member to interpret to save time",
      "C": "Skip the history and proceed directly to physical examination",
      "D": "Use only written materials translated into the patient's language"
    },
    "answer": "A",
    "explanation": "Trained medical interpreters ensure accuracy and confidentiality, whereas family members may introduce errors or bias; skipping the history or relying solely on written materials does not substitute for interactive interpretation."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "Which strategy is most effective when interviewing a patient with low health literacy?",
    "options": {
      "A": "Using the teach-back method to confirm the patient's understanding",
      "B": "Providing dense written pamphlets instead of verbal explanation",
      "C": "Using medical terminology to ensure clinical precision throughout",
      "D": "Assuming understanding whenever the patient nods along silently"
    },
    "answer": "A",
    "explanation": "Teach-back has the patient restate information in their own words, confirming true understanding, whereas jargon, dense text, and assumed comprehension can all mask literacy gaps."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "When interviewing a hostile or anxious patient, which approach is most appropriate?",
    "options": {
      "A": "Remain calm, acknowledge emotions, and set clear respectful limits",
      "B": "Match the patient's tone to demonstrate assertive authority",
      "C": "End the interview immediately at the first sign of frustration",
      "D": "Avoid addressing the patient's emotional state at all"
    },
    "answer": "A",
    "explanation": "De-escalation relies on staying calm, validating feelings, and maintaining respectful boundaries; matching hostility, abandoning the interview, or ignoring emotion tends to worsen the encounter."
  },
  {
    "id": 17,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "Why is 'setting the stage' with privacy and a comfortable environment emphasized before starting an interview?",
    "options": {
      "A": "It helps the patient feel safe enough to disclose sensitive information",
      "B": "It is required only when performing a focused physical examination",
      "C": "It allows the nurse to skip introductions and begin questioning",
      "D": "It matters solely for interviews conducted through an interpreter"
    },
    "answer": "A",
    "explanation": "A private, comfortable setting builds trust and supports open disclosure; this principle applies broadly to interviews, not only interpreted ones, and does not replace proper introductions."
  },
  {
    "id": 18,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "A patient reports chest discomfort. Which question best applies the 'Q' (Quality) component of OPQRSTU?",
    "options": {
      "A": "'Can you describe what the discomfort feels like?'",
      "B": "'On a scale of one to ten, how severe is it right now?'",
      "C": "'Does anything make the discomfort better or worse?'",
      "D": "'Where exactly do you feel the discomfort located?'"
    },
    "answer": "A",
    "explanation": "Quality asks the patient to characterize the sensation itself, such as sharp or dull; the other options address severity, aggravating/relieving factors, and region rather than quality."
  },
  {
    "id": 19,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "Interviewing as a clinical skill requires more than asking questions. What best reflects this idea?",
    "options": {
      "A": "Active listening and observation of nonverbal cues guide the interview",
      "B": "A rigid script must be followed identically for every patient",
      "C": "The nurse's own reactions and biases are irrelevant to the process",
      "D": "Only verbal content matters, since nonverbal cues cannot be assessed"
    },
    "answer": "A",
    "explanation": "Skilled interviewing integrates active listening with attention to nonverbal cues and self-awareness of bias; a rigid script and ignoring nonverbal information undermine the clinical skill involved."
  },
  {
    "id": 20,
    "chapter": 2,
    "domain": "Foundations of Assessment",
    "question": "A nurse needs a family history for the complete health history. Which best fits that section's purpose?",
    "options": {
      "A": "Documenting patterns of illness among the patient's blood relatives",
      "B": "Recording the patient's own past surgeries and hospitalizations",
      "C": "Listing current medications the patient takes on a daily basis",
      "D": "Describing the patient's occupation and living arrangements"
    },
    "answer": "A",
    "explanation": "Family history focuses on hereditary and familial illness patterns; past surgeries belong in past medical history, medications in the medication history, and occupation/living arrangements in social history."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "How does cultural safety differ from cultural competence in health assessment practice?",
    "options": {
      "A": "Cultural safety centers the patient's experience of feeling respected",
      "B": "Cultural safety focuses only on the nurse acquiring cultural facts",
      "C": "Cultural safety is achieved once through a single training session",
      "D": "Cultural safety applies exclusively to interpreted encounters"
    },
    "answer": "A",
    "explanation": "Cultural safety is defined by the patient's own experience of respect and power dynamics, whereas cultural competence emphasizes acquired knowledge; safety is an ongoing practice, not a one-time credential."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "Why is understanding the history of residential schools relevant to conducting a health assessment today?",
    "options": {
      "A": "It helps explain mistrust of health institutions among some patients",
      "B": "It has no bearing on current clinical encounters or communication",
      "C": "It only affects assessments conducted in northern communities",
      "D": "It is relevant solely to mental health assessment, not physical exams"
    },
    "answer": "A",
    "explanation": "The intergenerational trauma of residential schools can shape trust in health institutions across settings and assessment types, not just in the north or in mental health contexts."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "The TRC Calls to Action related to health care most directly call on providers to do what?",
    "options": {
      "A": "Address health inequities affecting Indigenous peoples and improve access",
      "B": "Limit health assessment services to on-reserve clinics only",
      "C": "Require every Indigenous patient to use a certified interpreter",
      "D": "Replace standard assessment tools with alternative therapies exclusively"
    },
    "answer": "A",
    "explanation": "The health-related Calls to Action call for closing health gaps and improving access and cultural safety for Indigenous peoples; they do not restrict services by location or mandate specific tools."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "Which principle is central to a trauma-informed approach during an assessment encounter?",
    "options": {
      "A": "Offering the patient choice and control over the pace of the exam",
      "B": "Proceeding quickly through sensitive questions to minimize discomfort",
      "C": "Withholding explanation of procedures to avoid causing anxiety",
      "D": "Assuming trauma history is irrelevant unless the patient volunteers it"
    },
    "answer": "A",
    "explanation": "Trauma-informed care emphasizes safety, trust, and patient choice, such as control over pacing; rushing, withholding explanations, and assuming irrelevance work against these principles."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "What is an effective way to build trust with Indigenous patients during an assessment?",
    "options": {
      "A": "Acknowledging historical harms and allowing time to build rapport",
      "B": "Moving quickly through history-taking to respect the patient's time",
      "C": "Avoiding any discussion of community or family supports",
      "D": "Assuming all Indigenous patients share identical health beliefs"
    },
    "answer": "A",
    "explanation": "Acknowledging historical context and taking time to build rapport supports trust; rushing, avoiding discussion of supports, and assuming uniform beliefs can undermine a culturally safe encounter."
  },
  {
    "id": 26,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "When assessing a newly arrived refugee, which adaptation best supports a culturally safe encounter?",
    "options": {
      "A": "Exploring the patient's migration and pre-arrival health experiences sensitively",
      "B": "Assuming prior health records exist and requesting them immediately",
      "C": "Using only closed questions to shorten the length of the visit",
      "D": "Avoiding questions about past trauma to prevent any discomfort"
    },
    "answer": "A",
    "explanation": "Sensitively exploring migration and health history helps contextualize findings for newcomers and refugees; assuming records exist, relying only on closed questions, or avoiding relevant history can miss important context."
  },
  {
    "id": 27,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "Why must nurses adapt techniques such as assessing for cyanosis or jaundice in patients with darker skin tones?",
    "options": {
      "A": "Standard techniques calibrated on lighter skin may miss key findings",
      "B": "These conditions cannot occur in patients with darker skin tones",
      "C": "Assessment techniques for these findings never require adaptation",
      "D": "Only laboratory testing can detect these findings in any patient"
    },
    "answer": "A",
    "explanation": "Many classic visual cues were calibrated on lighter skin tones, so nurses must use adapted techniques, such as examining mucous membranes, to avoid missing findings in patients with darker skin."
  },
  {
    "id": 28,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "What is a respectful adaptation when assessing a patient with a physical disability affecting mobility?",
    "options": {
      "A": "Asking the patient directly about their preferred way to be assisted",
      "B": "Repositioning the patient without explanation to save time",
      "C": "Speaking to an accompanying support person instead of the patient",
      "D": "Assuming the same positioning techniques apply to every patient"
    },
    "answer": "A",
    "explanation": "Asking the patient directly respects autonomy and yields accurate individualized information; speaking past the patient, repositioning without explanation, and assuming uniform technique are disrespectful or unsafe."
  },
  {
    "id": 29,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "A patient becomes visibly guarded when asked to disrobe for an exam. What is the best trauma-informed response?",
    "options": {
      "A": "Pause, explain the exam's purpose, and offer options for proceeding",
      "B": "Proceed quickly so the uncomfortable moment passes sooner",
      "C": "Document noncompliance and end the assessment immediately",
      "D": "Ignore the reaction and continue exactly as originally planned"
    },
    "answer": "A",
    "explanation": "A trauma-informed response prioritizes safety and choice by pausing to explain and offering options; rushing, labeling the patient noncompliant, or ignoring the reaction disregards trauma-informed principles."
  },
  {
    "id": 30,
    "chapter": 3,
    "domain": "Foundations of Assessment",
    "question": "Cultural humility is best described as which of the following?",
    "options": {
      "A": "An ongoing process of self-reflection about one's own biases",
      "B": "A finite set of facts learned once about other cultures",
      "C": "A credential awarded after completing a single workshop",
      "D": "A standardized checklist applied identically to every patient"
    },
    "answer": "A",
    "explanation": "Cultural humility is a lifelong process of self-reflection and openness, distinct from a fixed knowledge set, a one-time credential, or a rigid checklist."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "Why are the social determinants of health considered an important assessment framework?",
    "options": {
      "A": "They highlight how social and economic conditions shape health outcomes",
      "B": "They replace the need to assess any physical body systems directly",
      "C": "They apply only to patients living in low-income neighbourhoods",
      "D": "They are relevant solely during initial hospital admission assessments"
    },
    "answer": "A",
    "explanation": "The SDOH framework recognizes that factors like housing, income, and food access shape health outcomes across the population, not only for certain neighbourhoods, and it complements rather than replaces physical assessment."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "A patient experiencing housing instability presents with irregular sleep and medication storage issues. What does this suggest?",
    "options": {
      "A": "'Normal' findings may need reinterpretation given the patient's context",
      "B": "The findings indicate the patient is providing inaccurate information",
      "C": "Housing instability has no bearing on interpreting assessment findings",
      "D": "The findings should be documented identically to a housed patient's"
    },
    "answer": "A",
    "explanation": "Housing instability can alter what counts as an expected or achievable finding, such as medication storage, so nurses must interpret findings within the patient's living context rather than assuming inaccuracy or ignoring it."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "How might food insecurity influence an assessment finding such as unintentional weight change?",
    "options": {
      "A": "It can explain patterns of weight loss unrelated to primary illness",
      "B": "It has no measurable effect on nutritional assessment findings",
      "C": "It only affects laboratory values, never physical examination findings",
      "D": "It is relevant exclusively to pediatric assessment encounters"
    },
    "answer": "A",
    "explanation": "Food insecurity can directly contribute to weight change and nutritional findings across age groups, and it affects physical findings, not only laboratory values."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "Why is a patient's income and employment status relevant when a nurse plans follow-up after an assessment?",
    "options": {
      "A": "It affects the patient's capacity to afford care recommended after findings",
      "B": "It determines exclusively whether a patient is truthful during history-taking",
      "C": "It is unrelated to whether a patient can act on assessment results",
      "D": "It matters only when assessing patients in rural communities"
    },
    "answer": "A",
    "explanation": "Income and employment affect a patient's ability to afford medications, follow-up visits, or lifestyle changes recommended from assessment findings, regardless of setting, and are unrelated to truthfulness."
  },
  {
    "id": 35,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "What is a key structural barrier affecting assessment follow-up in rural, remote, and northern contexts?",
    "options": {
      "A": "Limited access to specialists and diagnostic services near home",
      "B": "An oversupply of primary care providers relative to population need",
      "C": "Universal availability of same-day specialist referrals",
      "D": "Consistently shorter travel distances to tertiary care centres"
    },
    "answer": "A",
    "explanation": "Rural, remote, and northern areas typically face limited local access to specialists and diagnostics, requiring travel, which is the opposite of an oversupply of providers or short distances to care."
  },
  {
    "id": 36,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "What is the purpose of using a validated screening tool for social determinants in clinical practice?",
    "options": {
      "A": "It systematically identifies social risks that might otherwise go unasked",
      "B": "It replaces the need for any further clinical conversation with patients",
      "C": "It is used only in specialized social work departments, not by nurses",
      "D": "It applies exclusively to patients already known to be housing unstable"
    },
    "answer": "A",
    "explanation": "Screening tools help systematically surface social risks like food or housing insecurity that may not arise spontaneously; they prompt further conversation rather than replace it and are appropriately used by nurses across settings."
  },
  {
    "id": 37,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "When an assessment reveals a social determinant concern, what is the nurse's most appropriate advocacy role?",
    "options": {
      "A": "Connecting the patient with relevant community resources and referrals",
      "B": "Documenting the concern but taking no further action",
      "C": "Addressing the concern only if the patient raises it a second time",
      "D": "Referring exclusively to physicians, since nurses cannot make referrals"
    },
    "answer": "A",
    "explanation": "Nurses can advocate by connecting patients to appropriate resources and referrals; taking no action, waiting for repetition, or assuming referrals are outside nursing scope understates the nurse's advocacy role."
  },
  {
    "id": 38,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "How can social isolation overlap with other social determinants of health during an assessment?",
    "options": {
      "A": "It can compound risks already present from poverty or housing instability",
      "B": "It is always an entirely independent factor unrelated to other determinants",
      "C": "It affects only assessment of older adults living in long-term care",
      "D": "It has no relevance to a nurse's interpretation of assessment findings"
    },
    "answer": "A",
    "explanation": "Social isolation frequently compounds other determinants such as poverty or unstable housing, affects patients across age groups, and is relevant to interpreting findings, not an isolated or irrelevant factor."
  },
  {
    "id": 39,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "A nurse is assessing a patient who reports skipping meals to afford rent. Which framework element does this best illustrate?",
    "options": {
      "A": "The interaction between income constraints and food insecurity",
      "B": "A structural barrier unique to northern and remote communities",
      "C": "A finding relevant only to a focused cardiovascular assessment",
      "D": "An issue entirely unrelated to income or employment status"
    },
    "answer": "A",
    "explanation": "Skipping meals to afford rent illustrates how income constraints and food insecurity interact, an example of overlapping determinants rather than a remote-specific barrier or an income-unrelated issue."
  },
  {
    "id": 40,
    "chapter": 4,
    "domain": "Foundations of Assessment",
    "question": "Why is it important for a nurse to assess for social isolation even when a patient presents with a physical complaint?",
    "options": {
      "A": "Isolation can influence both health outcomes and access to support",
      "B": "Social isolation is never linked to any physical health outcome",
      "C": "It is relevant only during mental health-specific assessments",
      "D": "It should be assessed exclusively by community social workers"
    },
    "answer": "A",
    "explanation": "Social isolation can affect health outcomes and a patient's access to support during recovery, so it is relevant even during physical assessments, not confined to mental health visits or social work referrals."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "A nurse forms an early hypothesis after two abnormal cues, then seeks data to confirm or refute it. This process best describes which reasoning model?",
    "options": {
      "A": "Hypothetico-deductive reasoning, generating and testing hypotheses against incoming clinical data",
      "B": "Pattern recognition, instantly matching the presentation to a memorized clinical picture",
      "C": "Cue clustering, grouping related findings without generating any working hypothesis",
      "D": "Confirmation bias, selectively noticing data that supports an initial impression"
    },
    "answer": "A",
    "explanation": "Hypothetico-deductive reasoning is the cyclical process of generating hypotheses from early cues and testing them against further data. Pattern recognition is instant and intuitive, cue clustering alone does not generate hypotheses, and confirmation bias is a distortion, not a reasoning model."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "An experienced nurse glances at a patient and immediately recognizes early sepsis without conscious step-by-step analysis. This illustrates which clinical reasoning process?",
    "options": {
      "A": "Pattern recognition, rapid intuitive matching based on prior clinical experience",
      "B": "Hypothetico-deductive reasoning, systematically testing multiple competing diagnostic hypotheses",
      "C": "Cue clustering, deliberately organizing scattered findings into related groups",
      "D": "Diagnostic labeling, assigning a formal nursing diagnosis to the findings"
    },
    "answer": "A",
    "explanation": "Pattern recognition relies on rapid, intuitive matching drawn from prior experience rather than deliberate, stepwise hypothesis testing. The other options describe slower, more analytical processes."
  },
  {
    "id": 43,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "Grouping fatigue, pallor, and tachycardia together because they may share an underlying cause is an example of which reasoning skill?",
    "options": {
      "A": "Cue clustering, organizing related findings into a coherent clinical picture",
      "B": "Hypothesis testing, confirming a single diagnosis through targeted questioning",
      "C": "Anchoring bias, fixating on the first cue that was noticed",
      "D": "Availability heuristic, recalling the most memorable past patient encounter"
    },
    "answer": "A",
    "explanation": "Cue clustering is the deliberate grouping of related findings to form a coherent clinical picture. The other options describe testing a hypothesis or cognitive biases, not clustering."
  },
  {
    "id": 44,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "A nurse notes a patient's slightly curved spine that is symmetric, flexible, and lifelong without functional limitation. What should the nurse conclude?",
    "options": {
      "A": "This finding is likely a normal anatomic variant requiring no further workup",
      "B": "This finding always indicates scoliosis requiring immediate orthopedic referral today",
      "C": "This finding confirms a structural abnormality needing urgent imaging studies",
      "D": "This finding should be documented only if the patient reports pain"
    },
    "answer": "A",
    "explanation": "A symmetric, flexible, lifelong finding without functional limitation fits the profile of a normal variant rather than pathology. The other options overreact to a benign finding."
  },
  {
    "id": 45,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "After clustering cues of dry mucous membranes, poor skin turgor, and low urine output, which step comes next in the reasoning process?",
    "options": {
      "A": "Formulating a nursing diagnosis such as deficient fluid volume based on the cues",
      "B": "Immediately notifying the family without further analysis of the assessment data",
      "C": "Discarding the cues because vital signs alone determine nursing diagnoses",
      "D": "Repeating the same assessment technique until the findings change spontaneously"
    },
    "answer": "A",
    "explanation": "After clustering related cues, the next step is formulating a nursing diagnosis that explains the pattern. The other options skip or abandon the reasoning process entirely."
  },
  {
    "id": 46,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "A nurse fixates on a patient's initial complaint of heartburn and dismisses new chest pressure and diaphoresis. This illustrates which cognitive bias?",
    "options": {
      "A": "Anchoring bias, over-relying on the first piece of information gathered",
      "B": "Availability bias, overestimating a diagnosis recalled from a recent case",
      "C": "Confirmation bias, actively seeking data that contradicts the initial impression",
      "D": "Premature closure, correctly finalizing a diagnosis before all data is in"
    },
    "answer": "A",
    "explanation": "Anchoring bias occurs when a clinician over-relies on initial information and fails to adjust despite new, contradictory data. Confirmation bias is defined incorrectly in one of the other choices, and premature closure cannot be correct by definition."
  },
  {
    "id": 47,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "A nurse suspecting anxiety asks only questions that support anxiety while ignoring cardiac risk factors. Which bias does this behaviour represent?",
    "options": {
      "A": "Confirmation bias, seeking only data that supports a pre-existing belief",
      "B": "Anchoring bias, being unable to move past the first cue noted",
      "C": "Overconfidence bias, trusting clinical judgment without any supporting data",
      "D": "Framing effect, being influenced only by how the question was phrased"
    },
    "answer": "A",
    "explanation": "Confirmation bias involves selectively seeking data that supports a pre-existing belief while ignoring contradictory evidence, exactly as described. The other biases involve different mechanisms."
  },
  {
    "id": 48,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "Which documentation entry best reflects clinical reasoning rather than an isolated finding?",
    "options": {
      "A": "Crackles noted bilaterally; consistent with fluid overload given recent IV therapy",
      "B": "Lungs auscultated; patient breathing at this time of the assessment",
      "C": "Vital signs recorded; chart reviewed prior to end of shift report",
      "D": "Patient assessed; findings within normal limits per unit assessment policy"
    },
    "answer": "A",
    "explanation": "One of the other choices links a finding to a clinical interpretation, demonstrating reasoning. The other entries state that an action occurred without connecting findings to clinical significance."
  },
  {
    "id": 49,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "Placing the following in correct hypothetico-deductive order: cue acquisition, hypothesis generation, hypothesis testing, and diagnosis. Which sequence is correct?",
    "options": {
      "A": "Cue acquisition, hypothesis generation, hypothesis testing, then diagnosis is reached",
      "B": "Diagnosis, hypothesis generation, cue acquisition, then hypothesis testing follows",
      "C": "Hypothesis testing, diagnosis, cue acquisition, then hypothesis generation occurs",
      "D": "Hypothesis generation, diagnosis, hypothesis testing, then cue acquisition happens"
    },
    "answer": "A",
    "explanation": "The correct sequence begins with gathering cues, then generating and testing hypotheses, and finally arriving at a diagnosis. The other orderings place diagnosis before the supporting reasoning steps."
  },
  {
    "id": 50,
    "chapter": 5,
    "domain": "Foundations of Assessment",
    "question": "A nurse finds an irregular but consistently patterned pulse in a young athlete during rest. What is the most appropriate next action?",
    "options": {
      "A": "Correlate the finding with history and consider a benign variant like arrhythmia",
      "B": "Immediately assume a life-threatening dysrhythmia and activate a rapid response",
      "C": "Ignore the finding since athletes never have any cardiac abnormalities",
      "D": "Document the finding as normal without any further clinical correlation"
    },
    "answer": "A",
    "explanation": "Correlating the finding with history and context is the appropriate next step, since athletes commonly have benign variants like sinus arrhythmia. Ignoring or overreacting without correlation are both inappropriate extremes."
  },
  {
    "id": 51,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "Which sequence reflects the standard order of the four physical examination techniques for most body systems?",
    "options": {
      "A": "Inspection, palpation, percussion, then auscultation in that established sequence",
      "B": "Palpation, inspection, auscultation, then percussion performed in that order",
      "C": "Auscultation, percussion, inspection, then palpation performed in that order",
      "D": "Percussion, auscultation, palpation, then inspection performed in that order"
    },
    "answer": "A",
    "explanation": "The standard order for most systems is inspection, palpation, percussion, then auscultation, moving from least to most invasive. The other sequences scramble this established order."
  },
  {
    "id": 52,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "For an abdominal examination, why does the standard technique order change from the usual sequence?",
    "options": {
      "A": "Auscultation precedes palpation so bowel sounds are not altered by manipulation",
      "B": "Percussion precedes inspection so tenderness is identified before visual survey",
      "C": "Palpation precedes auscultation so masses are located before listening begins",
      "D": "Inspection is omitted entirely because the abdomen requires only auscultation"
    },
    "answer": "A",
    "explanation": "Auscultation is performed before palpation and percussion in the abdominal exam because manipulating the abdomen can artificially alter bowel sounds. The other options misstate the rationale or omit a necessary step."
  },
  {
    "id": 53,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "Which piece of equipment is used to visualize the tympanic membrane and external ear canal?",
    "options": {
      "A": "Otoscope, fitted with a disposable speculum sized to the ear canal",
      "B": "Ophthalmoscope, used to visualize the retina and optic disc structures",
      "C": "Tuning fork, used to assess vibratory sense and hearing conduction",
      "D": "Nasal speculum, used to inspect the nasal mucosa and turbinates"
    },
    "answer": "A",
    "explanation": "An otoscope with a fitted speculum is used to examine the ear canal and tympanic membrane. The other instruments are used for different anatomic structures."
  },
  {
    "id": 54,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "According to routine practices, when should hand hygiene be performed relative to a physical examination?",
    "options": {
      "A": "Before and after every patient contact, including before donning gloves",
      "B": "Only after the examination, since gloves fully replace hand hygiene needs",
      "C": "Only when visible soiling of the hands is present beforehand",
      "D": "Once per shift, regardless of the number of patient contacts"
    },
    "answer": "A",
    "explanation": "Routine practices require hand hygiene before and after every patient contact, including before gloving, since gloves do not replace hand hygiene. The other options describe inadequate or infrequent practices."
  },
  {
    "id": 55,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "Which position is most appropriate for examining the female genitalia and performing a pelvic examination?",
    "options": {
      "A": "Lithotomy position, with feet supported in stirrups and hips flexed",
      "B": "Prone position, with the patient lying flat on the abdomen",
      "C": "Sims position, used primarily for rectal examination and enemas",
      "D": "Trendelenburg position, with the head lower than the pelvis"
    },
    "answer": "A",
    "explanation": "The lithotomy position provides access for pelvic and genital examinations, with the patient's feet supported in stirrups. The other positions are used for different examination purposes."
  },
  {
    "id": 56,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "What is the primary purpose of draping during a physical examination?",
    "options": {
      "A": "To preserve patient dignity while exposing only the area being examined",
      "B": "To keep the examination room at a consistently warmer temperature",
      "C": "To prevent the examiner from needing to explain each exam step",
      "D": "To reduce the total time required to complete the examination"
    },
    "answer": "A",
    "explanation": "Draping preserves patient dignity and privacy by exposing only the body area currently being assessed. The other options describe secondary or unrelated effects, not the primary purpose."
  },
  {
    "id": 57,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "A nurse is about to perform a breast examination on a patient who requests a chaperone. What should the nurse do?",
    "options": {
      "A": "Arrange for a chaperone to be present before proceeding with the examination",
      "B": "Explain that chaperones are unnecessary because the nurse is a professional",
      "C": "Proceed with the examination immediately since consent was already obtained",
      "D": "Postpone the examination indefinitely until the patient withdraws the request"
    },
    "answer": "A",
    "explanation": "A patient's request for a chaperone should be honoured before proceeding, supporting comfort, trust, and safety. The other options dismiss or unnecessarily delay a reasonable patient request."
  },
  {
    "id": 58,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "Which type of lighting is preferred for accurately assessing skin colour and jaundice during inspection?",
    "options": {
      "A": "Natural daylight or bright white light rather than fluorescent or dim lighting",
      "B": "Dim lighting to reduce patient discomfort and glare during the exam",
      "C": "Coloured overhead lighting to enhance contrast of subtle skin changes",
      "D": "Any lighting source, since skin colour assessment does not depend on light"
    },
    "answer": "A",
    "explanation": "Natural daylight or bright white light provides the truest representation of skin colour and is preferred for detecting subtle changes like jaundice. Dim, coloured, or arbitrary lighting can distort colour perception."
  },
  {
    "id": 59,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "What is the primary rationale for organizing a physical examination in a head-to-toe sequence?",
    "options": {
      "A": "It minimizes position changes for the patient and improves examination efficiency",
      "B": "It ensures the cardiovascular system is always assessed before any other system",
      "C": "It allows the nurse to skip systems that seem clinically irrelevant",
      "D": "It is required only for examinations performed in emergency department settings"
    },
    "answer": "A",
    "explanation": "A head-to-toe sequence minimizes repositioning and improves overall efficiency and completeness. The other options misstate the rationale or apply it too narrowly."
  },
  {
    "id": 60,
    "chapter": 6,
    "domain": "Foundations of Assessment",
    "question": "When performing percussion, where should the examiner strike to produce an accurate sound?",
    "options": {
      "A": "On the distal interphalangeal joint of the stationary pleximeter finger",
      "B": "On the patient's skin directly using the flat of the palm",
      "C": "On the proximal phalanx of the same hand doing the striking",
      "D": "On the examination table beside the patient rather than the body"
    },
    "answer": "A",
    "explanation": "Correct percussion technique strikes the distal joint of the stationary pleximeter finger placed on the patient's skin, producing an accurate resonant sound. The other options describe incorrect technique."
  },
  {
    "id": 61,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Which observation is part of the general survey completed before any hands-on assessment begins?",
    "options": {
      "A": "Overall appearance, level of distress, and apparent state of health",
      "B": "Precise auscultated blood pressure reading obtained with a manual cuff",
      "C": "Laboratory values reviewed from the patient's most recent blood work",
      "D": "Detailed palpation findings from the abdominal examination performed later"
    },
    "answer": "A",
    "explanation": "The general survey is a visual observation made before hands-on techniques, covering appearance, distress, and apparent health status. The other options involve later, hands-on, or unrelated data sources."
  },
  {
    "id": 62,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "A patient weighs 70 kg and is 1.75 m tall. Which formula correctly calculates this patient's BMI?",
    "options": {
      "A": "Weight in kilograms divided by height in metres squared",
      "B": "Weight in kilograms multiplied by height in metres squared",
      "C": "Height in metres divided by weight in kilograms squared",
      "D": "Weight in pounds divided by height in inches squared"
    },
    "answer": "A",
    "explanation": "BMI is correctly calculated as weight in kilograms divided by height in metres squared. The other formulas invert the calculation or use incorrect units."
  },
  {
    "id": 63,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Why is waist circumference measured in addition to BMI during anthropometric assessment?",
    "options": {
      "A": "It estimates visceral adiposity, which independently predicts cardiometabolic risk",
      "B": "It replaces the need for any weight measurement entirely",
      "C": "It is used only to select appropriately sized hospital gowns",
      "D": "It has no established relationship to cardiovascular health outcomes"
    },
    "answer": "A",
    "explanation": "Waist circumference estimates visceral fat, which independently predicts cardiometabolic risk beyond what BMI captures alone. The other options misstate or dismiss its clinical value."
  },
  {
    "id": 64,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "During manual blood pressure measurement, the disappearance of Korotkoff sounds corresponds to which value?",
    "options": {
      "A": "The diastolic pressure, marking cessation of turbulent arterial blood flow",
      "B": "The systolic pressure, marking the first audible turbulent blood flow",
      "C": "The mean arterial pressure, averaged across the full cardiac cycle",
      "D": "The pulse pressure, calculated as systolic minus diastolic pressure"
    },
    "answer": "A",
    "explanation": "The disappearance of Korotkoff sounds marks the diastolic pressure, when turbulent flow ceases and laminar flow resumes. Systolic pressure is marked by the first sound, not the last."
  },
  {
    "id": 65,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Which factor is most likely to produce a falsely low pulse oximetry reading?",
    "options": {
      "A": "Poor peripheral perfusion, such as from cold extremities or hypotension",
      "B": "A resting heart rate that falls within the normal adult range",
      "C": "A pulse oximeter probe placed correctly on a warm fingertip",
      "D": "A patient who is calm, still, and breathing at a normal rate"
    },
    "answer": "A",
    "explanation": "Poor peripheral perfusion reduces the signal available to the sensor and commonly produces falsely low readings. The other options describe conditions that support accurate readings."
  },
  {
    "id": 66,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Compared to adults, which vital sign pattern is typically expected in healthy infants?",
    "options": {
      "A": "Higher resting heart rate and higher respiratory rate than adults",
      "B": "Lower resting heart rate and lower respiratory rate than adults",
      "C": "Identical heart rate and respiratory rate ranges as healthy adults",
      "D": "Higher blood pressure readings than those expected in healthy adults"
    },
    "answer": "A",
    "explanation": "Infants normally have higher resting heart rates and respiratory rates than adults due to higher metabolic demands. Their blood pressure is typically lower than adult values, not higher."
  },
  {
    "id": 67,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "What is the primary purpose of an early warning scoring system used on inpatient units?",
    "options": {
      "A": "To flag physiological deterioration early and prompt timely clinical escalation",
      "B": "To replace the need for routine vital sign monitoring entirely",
      "C": "To calculate a patient's expected length of hospital stay accurately",
      "D": "To determine staffing ratios required on a given nursing unit"
    },
    "answer": "A",
    "explanation": "Early warning systems are designed to identify deterioration early so clinicians can escalate care promptly. They supplement rather than replace vital sign monitoring."
  },
  {
    "id": 68,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Which temperature measurement site is generally considered most accurate for core body temperature?",
    "options": {
      "A": "Pulmonary artery or rectal site, both closely reflecting core temperature",
      "B": "Axillary site, considered the most accurate reflection of core temperature",
      "C": "Tympanic site, always more accurate than any other available site",
      "D": "Temporal artery site, unaffected by ambient room temperature conditions"
    },
    "answer": "A",
    "explanation": "Pulmonary artery and rectal sites most closely approximate true core temperature. Axillary and tympanic sites are less accurate and more prone to external influence."
  },
  {
    "id": 69,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "Why should respiratory rate be counted without informing the patient it is being assessed?",
    "options": {
      "A": "Awareness of being observed can cause patients to alter their breathing pattern",
      "B": "Patients are legally required to consent separately before respirations are counted",
      "C": "It has no effect on accuracy, so informing the patient is preferred",
      "D": "Counting openly is faster and therefore always the recommended approach"
    },
    "answer": "A",
    "explanation": "Patients who know their respirations are being counted may unconsciously change their breathing pattern, reducing accuracy. Discreet counting avoids this effect."
  },
  {
    "id": 70,
    "chapter": 7,
    "domain": "General Survey & Screening",
    "question": "A nurse notices a patient becoming increasingly confused with a rising respiratory rate over one hour. What should the nurse do first?",
    "options": {
      "A": "Reassess vital signs promptly and escalate care per early warning protocol",
      "B": "Wait until the next scheduled vital sign check before taking action",
      "C": "Document the finding only, since confusion alone rarely indicates deterioration",
      "D": "Assume the change is due to fatigue and offer the patient rest"
    },
    "answer": "A",
    "explanation": "New confusion with a rising respiratory rate are red flags for deterioration and warrant prompt reassessment and escalation. Waiting or attributing the change to fatigue delays necessary intervention."
  },
  {
    "id": 71,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "Why is pain often referred to as the fifth vital sign in clinical assessment?",
    "options": {
      "A": "It highlights that pain should be assessed routinely alongside other vital signs",
      "B": "It means pain must always be measured using an invasive monitoring device",
      "C": "It indicates pain is only relevant in postoperative surgical patient populations",
      "D": "It confirms that pain scores replace the need for other vital signs"
    },
    "answer": "A",
    "explanation": "The fifth vital sign framing emphasizes that pain assessment should be as routine and consistent as other vital signs. It does not imply invasive monitoring, a narrow population, or replacement of other measures."
  },
  {
    "id": 72,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "Which mnemonic framework is commonly used to structure a comprehensive pain history?",
    "options": {
      "A": "PQRST, covering provocation, quality, region, severity, and timing of pain",
      "B": "SBAR, covering situation, background, assessment, and recommendation for handoff",
      "C": "SOAP, covering subjective, objective, assessment, and plan documentation format",
      "D": "ABCDE, covering airway, breathing, circulation, disability, and exposure priorities"
    },
    "answer": "A",
    "explanation": "PQRST is the mnemonic specifically used to structure a comprehensive pain history. The other mnemonics serve different purposes such as handoff communication or documentation format."
  },
  {
    "id": 73,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "How does chronic pain typically differ from acute pain in clinical presentation?",
    "options": {
      "A": "Chronic pain often lacks obvious autonomic signs like tachycardia or diaphoresis",
      "B": "Chronic pain always presents with severe autonomic signs like diaphoresis",
      "C": "Chronic pain resolves predictably within days once the cause is treated",
      "D": "Chronic pain is defined strictly as pain lasting less than one month"
    },
    "answer": "A",
    "explanation": "Chronic pain often lacks the obvious autonomic signs seen in acute pain because the body adapts physiologically over time. The other options describe features more consistent with acute pain."
  },
  {
    "id": 74,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "Which tool is appropriate for assessing pain in a nonverbal patient with advanced dementia?",
    "options": {
      "A": "A behavioural pain scale that observes facial expression, body movement, and vocalization",
      "B": "A numeric rating scale requiring the patient to state a number zero to ten",
      "C": "A verbal descriptor scale requiring the patient to choose a written word",
      "D": "Self-report alone, since nonverbal patients cannot reliably show behavioural pain cues"
    },
    "answer": "A",
    "explanation": "A behavioural pain scale relies on observable cues rather than self-report, making it appropriate for nonverbal patients. Self-report tools require verbal communication that these patients cannot provide."
  },
  {
    "id": 75,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "Research on pain assessment disparities has documented which concerning pattern in clinical practice?",
    "options": {
      "A": "Certain populations' pain reports are undertreated due to implicit clinician bias",
      "B": "All patient populations receive identical pain assessment and treatment outcomes",
      "C": "Pain disparities occur equally regardless of patient ethnicity or background",
      "D": "Documented bias in pain treatment has been fully eliminated in Canada"
    },
    "answer": "A",
    "explanation": "Research has documented that certain populations' pain reports are undertreated due to implicit bias among clinicians. The other options incorrectly claim equity or resolution that has not been established."
  },
  {
    "id": 76,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "After administering an analgesic, when should the nurse reassess the patient's pain level?",
    "options": {
      "A": "Within the expected onset time of the specific medication administered",
      "B": "Only at the start of the next scheduled shift assessment period",
      "C": "Immediately upon administration, before the medication has any time to act",
      "D": "Reassessment is unnecessary once analgesia has been documented as given"
    },
    "answer": "A",
    "explanation": "Reassessment should occur within the expected onset window of the medication to accurately evaluate its effectiveness. Reassessing too early, too late, or not at all fails to close the loop on treatment."
  },
  {
    "id": 77,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "A patient describes pain as burning and shooting down the leg. This quality most suggests which pain type?",
    "options": {
      "A": "Neuropathic pain, arising from nerve tissue damage or dysfunction",
      "B": "Visceral pain, arising from internal organ stretching or distension",
      "C": "Somatic pain, arising from skin, muscle, or bone structures",
      "D": "Referred pain, felt at a site distant from its true origin"
    },
    "answer": "A",
    "explanation": "Burning and shooting qualities are classic descriptors of neuropathic pain, arising from nerve tissue damage. Visceral and somatic pain typically present with different qualities such as cramping or aching."
  },
  {
    "id": 78,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "Which pain assessment tool is most appropriate for a verbal preschool-aged child?",
    "options": {
      "A": "FACES pain scale, using expressive cartoon faces to rate intensity",
      "B": "Numeric rating scale from zero to ten used for verbal adults",
      "C": "Behavioural pain scale designed specifically for mechanically ventilated adults",
      "D": "Visual analog scale requiring abstract line marking not used clinically with young children"
    },
    "answer": "A",
    "explanation": "The FACES scale uses simple expressive imagery appropriate for young children who cannot yet grasp abstract numeric or line-based scales. The other tools are designed for adult or ventilated populations."
  },
  {
    "id": 79,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "What does \"closing the loop\" mean in the context of pain reassessment?",
    "options": {
      "A": "Documenting the reassessment outcome and adjusting the plan based on response",
      "B": "Ending the nursing shift once pain medication has been administered",
      "C": "Discontinuing all further pain assessment after the first intervention given",
      "D": "Referring every patient with pain to a specialist before continuing"
    },
    "answer": "A",
    "explanation": "Closing the loop means documenting the reassessment outcome and adjusting the care plan accordingly, completing the pain management cycle. The other options describe stopping or bypassing this cycle."
  },
  {
    "id": 80,
    "chapter": 8,
    "domain": "General Survey & Screening",
    "question": "A patient with a traumatic brain injury cannot self-report pain reliably. Which assessment approach best fits this situation?",
    "options": {
      "A": "Combine observed behavioural cues with physiological indicators like heart rate",
      "B": "Rely solely on family report without any direct patient observation",
      "C": "Assume the patient is pain-free since self-report cannot be obtained",
      "D": "Withhold analgesia until the patient regains full ability to self-report"
    },
    "answer": "A",
    "explanation": "Combining behavioural observation with physiological indicators provides the most complete picture when self-report is unreliable. Assuming absence of pain or withholding treatment risks undertreating real pain."
  },
  {
    "id": 81,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "A nurse asks a client to list everything eaten and drunk over the past day. What technique is being used?",
    "options": {
      "A": "24-hour dietary recall",
      "B": "Food frequency questionnaire",
      "C": "Diet history interview",
      "D": "Anthropometric screening"
    },
    "answer": "A",
    "explanation": "A 24-hour recall asks the client to report all intake from the previous day. The other options describe broader or different assessment methods, not a single-day recall."
  },
  {
    "id": 82,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "Which limitation is most associated with the 24-hour dietary recall method?",
    "options": {
      "A": "It may not reflect the client's usual eating pattern",
      "B": "It requires specialized laboratory equipment",
      "C": "It cannot be used with older adults",
      "D": "It only measures fluid intake, not food"
    },
    "answer": "A",
    "explanation": "A single recalled day may be atypical due to illness, holidays, or memory bias, so it may not represent usual intake. The other options are inaccurate descriptions of the method."
  },
  {
    "id": 83,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "The Canadian Nutrition Screening Tool (CNST) is validated for use in which setting?",
    "options": {
      "A": "Acute care hospital admission",
      "B": "Long-term care discharge planning",
      "C": "Prenatal community clinics only",
      "D": "School-based health programs"
    },
    "answer": "A",
    "explanation": "The CNST was developed and validated for identifying nutrition risk at hospital admission in Canadian acute care. It was not designed specifically for the other listed settings."
  },
  {
    "id": 84,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "Which anthropometric measure is most limited by fluid status such as edema or ascites?",
    "options": {
      "A": "Body weight",
      "B": "Mid-upper arm circumference",
      "C": "Triceps skinfold thickness",
      "D": "Waist-to-hip ratio"
    },
    "answer": "A",
    "explanation": "Body weight can be significantly altered by fluid retention, masking true nutritional status. Skinfold and circumference measures are less directly affected by fluid shifts."
  },
  {
    "id": 85,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "A client presents with glossitis and angular stomatitis. These findings most strongly suggest deficiency in which nutrient group?",
    "options": {
      "A": "B vitamins",
      "B": "Vitamin A",
      "C": "Vitamin K",
      "D": "Calcium"
    },
    "answer": "A",
    "explanation": "Glossitis and angular stomatitis are classic physical signs of B vitamin deficiencies, particularly riboflavin, niacin, and B12. Vitamin A, K, and calcium deficiencies present with different physical findings."
  },
  {
    "id": 86,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "Koilonychia, or spoon-shaped nails, is a physical sign most associated with which deficiency?",
    "options": {
      "A": "Iron deficiency",
      "B": "Vitamin D deficiency",
      "C": "Zinc deficiency",
      "D": "Folate deficiency"
    },
    "answer": "A",
    "explanation": "Koilonychia is a recognized physical sign of chronic iron deficiency anemia. The other listed deficiencies present with different nail or skin changes."
  },
  {
    "id": 87,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "Which brief tool is most appropriate for screening a client for disordered eating during a health assessment?",
    "options": {
      "A": "SCOFF questionnaire",
      "B": "Mini Nutritional Assessment",
      "C": "Braden Scale",
      "D": "Glasgow Coma Scale"
    },
    "answer": "A",
    "explanation": "The SCOFF questionnaire is a short validated screening tool designed to identify disordered eating behaviours. The other tools screen for nutrition risk, skin breakdown risk, and level of consciousness respectively."
  },
  {
    "id": 88,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "When assessing an Indigenous client for food insecurity, respecting food sovereignty means the nurse should primarily do which of the following?",
    "options": {
      "A": "Ask about access to traditional and country foods",
      "B": "Recommend only foods from Canada's food guide",
      "C": "Discourage traditional hunting and fishing practices",
      "D": "Assume urban grocery access meets all needs"
    },
    "answer": "A",
    "explanation": "Food sovereignty includes valuing and asking about access to traditional and country foods as part of self-determination over food systems. The other options disregard cultural food practices."
  },
  {
    "id": 89,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "A client coughs and has a wet-sounding voice after swallowing water during a bedside screen. What does this most likely indicate?",
    "options": {
      "A": "Risk of aspiration",
      "B": "Normal swallow function",
      "C": "Esophageal reflux only",
      "D": "Adequate airway protection"
    },
    "answer": "A",
    "explanation": "Coughing and a wet vocal quality after swallowing are hallmark signs of aspiration risk on a bedside dysphagia screen. These findings do not indicate normal or protected swallowing."
  },
  {
    "id": 90,
    "chapter": 9,
    "domain": "General Survey & Screening",
    "question": "Which finding on inspection would most raise concern for pocketing food, a sign of swallowing-related nutrition risk?",
    "options": {
      "A": "Food remaining in the cheeks after meals",
      "B": "Weight gain over several weeks",
      "C": "Increased appetite reported by the client",
      "D": "Normal oral mucosa colour"
    },
    "answer": "A",
    "explanation": "Pocketing occurs when food collects in the cheeks instead of being swallowed, signalling impaired oral or pharyngeal control. The other findings are unrelated or reassuring signs."
  },
  {
    "id": 91,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Which component of the mental status examination assesses a client's stream and organization of ideas?",
    "options": {
      "A": "Thought process",
      "B": "Thought content",
      "C": "Insight",
      "D": "Judgment"
    },
    "answer": "A",
    "explanation": "Thought process refers to how ideas are organized and connected, such as linear versus tangential. Thought content refers to what the client is thinking about, not how it is organized."
  },
  {
    "id": 92,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "The Montreal Cognitive Assessment (MoCA) is preferred over the MMSE in some Canadian settings mainly because it is more sensitive to what?",
    "options": {
      "A": "Mild cognitive impairment",
      "B": "Acute delirium only",
      "C": "Severe end-stage dementia",
      "D": "Substance intoxication"
    },
    "answer": "A",
    "explanation": "The MoCA was designed to detect mild cognitive impairment, which the MMSE often misses due to ceiling effects. It is not specifically designed to detect delirium, severe dementia, or intoxication."
  },
  {
    "id": 93,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "A client's confusion began suddenly two days ago and fluctuates throughout the day. This presentation is most consistent with which condition?",
    "options": {
      "A": "Delirium",
      "B": "Dementia",
      "C": "Major depressive disorder",
      "D": "Chronic schizophrenia"
    },
    "answer": "A",
    "explanation": "Sudden onset and fluctuating course are hallmark features of delirium, distinguishing it from the gradual, progressive course of dementia. Depression and chronic schizophrenia do not typically present this way."
  },
  {
    "id": 94,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Which standardized tool is specifically designed to identify delirium at the bedside?",
    "options": {
      "A": "Confusion Assessment Method",
      "B": "Patient Health Questionnaire-9",
      "C": "Geriatric Depression Scale",
      "D": "CAGE questionnaire"
    },
    "answer": "A",
    "explanation": "The Confusion Assessment Method (CAM) was developed specifically to detect delirium using key diagnostic features. The other tools screen for depression or substance use, not delirium."
  },
  {
    "id": 95,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Which screening tool is commonly used to assess depression severity in older adults during a health assessment?",
    "options": {
      "A": "Geriatric Depression Scale",
      "B": "AUDIT",
      "C": "Mini-Cog",
      "D": "Clock Drawing Test"
    },
    "answer": "A",
    "explanation": "The Geriatric Depression Scale is specifically validated for screening depressive symptoms in older adults. The other tools assess alcohol use or cognitive function, not depression."
  },
  {
    "id": 96,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Harm-reduction-informed interviewing about substance use is best characterized by which approach?",
    "options": {
      "A": "Non-judgmental questions that meet the client where they are",
      "B": "Insisting on immediate abstinence before continuing care",
      "C": "Avoiding the topic unless the client raises it first",
      "D": "Reporting all substance use to family members"
    },
    "answer": "A",
    "explanation": "Harm-reduction-informed interviewing uses non-judgmental, client-centred questioning that respects autonomy and readiness for change. Demanding abstinence, avoidance, or breaching confidentiality contradict this approach."
  },
  {
    "id": 97,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "During a suicide risk assessment, asking about a specific plan and access to means primarily helps the nurse evaluate what?",
    "options": {
      "A": "The level of imminent risk",
      "B": "The client's insight into their diagnosis",
      "C": "The presence of hallucinations",
      "D": "The client's long-term prognosis"
    },
    "answer": "A",
    "explanation": "Specificity of plan and access to means are key factors used to gauge the immediacy and severity of suicide risk. They do not directly assess insight, hallucinations, or prognosis."
  },
  {
    "id": 98,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Capacity to consent to a specific treatment is best described as which of the following?",
    "options": {
      "A": "Decision-specific and time-specific, not global",
      "B": "A fixed trait that applies to all future decisions",
      "C": "Equivalent to a formal legal competency ruling",
      "D": "Determined solely by the client's psychiatric diagnosis"
    },
    "answer": "A",
    "explanation": "Capacity is assessed for a particular decision at a particular time, since a client may have capacity for some decisions but not others. It is not a global, fixed, or diagnosis-based determination."
  },
  {
    "id": 99,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "Which client statement during a capacity assessment best demonstrates the ability to appreciate the consequences of a decision?",
    "options": {
      "A": "\"If I refuse surgery, my infection could get worse.\"",
      "B": "\"I understand the doctor said I have an infection.\"",
      "C": "\"I choose not to have the surgery.\"",
      "D": "\"Can you repeat what the surgery involves?\""
    },
    "answer": "A",
    "explanation": "Appreciation involves recognizing how the information and choice apply personally, including likely consequences. The other statements reflect understanding, choice, or clarification rather than appreciation."
  },
  {
    "id": 100,
    "chapter": 10,
    "domain": "General Survey & Screening",
    "question": "A client scores low on the CAGE questionnaire follow-up interview but reports daily heavy drinking. What should the nurse do next?",
    "options": {
      "A": "Further assess using a more detailed tool such as the AUDIT",
      "B": "Document that no alcohol problem exists",
      "C": "Refer immediately to inpatient detoxification",
      "D": "Discontinue substance use screening entirely"
    },
    "answer": "A",
    "explanation": "A discrepancy between screening results and reported use warrants further assessment with a more detailed validated tool like the AUDIT. Dismissing the concern or jumping to detox without further assessment is inappropriate."
  },
  {
    "id": 101,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "What is the best light source for accurately assessing skin colour during a physical examination?",
    "options": {
      "A": "Natural daylight",
      "B": "Fluorescent overhead lighting",
      "C": "Dim incandescent lighting",
      "D": "Ultraviolet lighting"
    },
    "answer": "A",
    "explanation": "Natural daylight provides the truest representation of skin colour and is preferred when available. Artificial lighting can distort colour tones and mask subtle findings."
  },
  {
    "id": 102,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "To assess skin turgor, the nurse pinches a fold of skin and observes for tenting. In which area is this technique least reliable in older adults?",
    "options": {
      "A": "Back of the hand",
      "B": "Sternal area",
      "C": "Forehead",
      "D": "Anterior chest"
    },
    "answer": "A",
    "explanation": "Loss of skin elasticity with aging makes the back of the hand an unreliable site for turgor assessment in older adults. The sternum and forehead retain elasticity better and are preferred sites."
  },
  {
    "id": 103,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which body site is most useful for detecting cyanosis in a client with deeply pigmented skin?",
    "options": {
      "A": "Oral mucosa and conjunctiva",
      "B": "Forearm skin",
      "C": "Anterior shin",
      "D": "Scalp"
    },
    "answer": "A",
    "explanation": "Mucous membranes and conjunctiva have less melanin and better reveal colour changes such as cyanosis across all skin tones. Forearm, shin, and scalp skin are less reliable for this purpose."
  },
  {
    "id": 104,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "When describing a skin lesion, which term refers to a small, flat, non-palpable area of colour change?",
    "options": {
      "A": "Macule",
      "B": "Papule",
      "C": "Vesicle",
      "D": "Nodule"
    },
    "answer": "A",
    "explanation": "A macule is a flat, non-palpable lesion defined by colour change alone. Papules, vesicles, and nodules are all raised or palpable lesions."
  },
  {
    "id": 105,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "In a client with darker skin pigmentation, erythema is most likely to appear as which finding?",
    "options": {
      "A": "A deeper violet or darker tone than surrounding skin",
      "B": "A bright red colour identical to lighter skin tones",
      "C": "A yellowish discolouration only",
      "D": "No visible colour change at all"
    },
    "answer": "A",
    "explanation": "Erythema in darker skin often presents as a deeper, violaceous, or darker tone rather than the classic bright red seen in lighter skin. It usually remains visible, so it does not go undetected entirely."
  },
  {
    "id": 106,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which nail finding is classically associated with chronic hypoxia, such as in advanced lung disease?",
    "options": {
      "A": "Clubbing",
      "B": "Koilonychia",
      "C": "Onycholysis",
      "D": "Beau's lines"
    },
    "answer": "A",
    "explanation": "Nail clubbing develops with chronic hypoxia and is a recognized sign of underlying cardiopulmonary disease. The other nail changes are associated with different conditions such as iron deficiency or nail separation."
  },
  {
    "id": 107,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "A client presents with a widespread, non-blanching, purpuric rash and fever. This presentation should raise concern for which dermatologic emergency?",
    "options": {
      "A": "Meningococcemia",
      "B": "Seborrheic dermatitis",
      "C": "Tinea corporis",
      "D": "Contact dermatitis"
    },
    "answer": "A",
    "explanation": "A non-blanching purpuric rash with fever is a red-flag presentation for meningococcemia, a life-threatening emergency requiring urgent treatment. The other conditions are benign and do not present this way."
  },
  {
    "id": 108,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which configuration term describes lesions arranged in a line along a body surface?",
    "options": {
      "A": "Linear",
      "B": "Annular",
      "C": "Grouped",
      "D": "Diffuse"
    },
    "answer": "A",
    "explanation": "Linear configuration describes lesions arranged in a straight line, such as from scratching or contact exposure. Annular describes a ring shape, and grouped or diffuse describe clustering or widespread patterns."
  },
  {
    "id": 109,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "During hair assessment, patchy hair loss with well-defined round borders and no scarring most suggests which condition?",
    "options": {
      "A": "Alopecia areata",
      "B": "Androgenic alopecia",
      "C": "Telogen effluvium",
      "D": "Trichotillomania"
    },
    "answer": "A",
    "explanation": "Alopecia areata classically presents as well-circumscribed round patches of non-scarring hair loss. The other conditions typically present with diffuse thinning or a different pattern of hair loss."
  },
  {
    "id": 110,
    "chapter": 11,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which assessment finding is most consistent with Stevens-Johnson syndrome and warrants urgent referral?",
    "options": {
      "A": "Widespread mucocutaneous blistering with skin sloughing",
      "B": "A single stable pigmented mole",
      "C": "Mild diffuse dry skin",
      "D": "Localized ringworm patch"
    },
    "answer": "A",
    "explanation": "Widespread blistering and skin sloughing involving mucous membranes are hallmark features of Stevens-Johnson syndrome, a dermatologic emergency. The other findings are benign and do not require urgent referral."
  },
  {
    "id": 111,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "During facial cranial nerve screening, a client cannot raise their eyebrow or close their eye on one side, but forehead wrinkling is absent bilaterally in a stroke pattern. What does forehead sparing typically indicate?",
    "options": {
      "A": "A central lesion such as stroke rather than a peripheral lesion",
      "B": "A peripheral facial nerve palsy such as Bell's palsy",
      "C": "Normal cranial nerve function",
      "D": "Trigeminal nerve dysfunction"
    },
    "answer": "A",
    "explanation": "Forehead sparing occurs in central lesions because the forehead receives bilateral cortical innervation, unlike the lower face. Bell's palsy, a peripheral lesion, typically affects the entire side of the face including the forehead."
  },
  {
    "id": 112,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which cervical lymph node chain is located just above the clavicle and is most concerning for malignancy when enlarged?",
    "options": {
      "A": "Supraclavicular nodes",
      "B": "Submental nodes",
      "C": "Preauricular nodes",
      "D": "Occipital nodes"
    },
    "answer": "A",
    "explanation": "Enlargement of the supraclavicular nodes, particularly on the left (Virchow's node), is highly concerning for intra-abdominal or thoracic malignancy. The other node groups are more commonly associated with local infections."
  },
  {
    "id": 113,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "To properly inspect the thyroid gland for symmetric movement, the nurse should ask the client to do what?",
    "options": {
      "A": "Swallow a sip of water",
      "B": "Hold their breath for ten seconds",
      "C": "Turn their head fully to one side",
      "D": "Open their mouth wide"
    },
    "answer": "A",
    "explanation": "Having the client swallow water causes the thyroid to rise, allowing the nurse to observe for symmetric movement or a visible goiter. The other actions do not elevate the thyroid gland for inspection."
  },
  {
    "id": 114,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which technique describes the posterior approach to thyroid palpation?",
    "options": {
      "A": "Standing behind the client and palpating with both hands",
      "B": "Standing in front of the client and using only one hand",
      "C": "Having the client lie supine with neck hyperextended only",
      "D": "Palpating solely through auscultation with a stethoscope"
    },
    "answer": "A",
    "explanation": "The posterior approach involves the examiner standing behind the client and using both hands to palpate the thyroid lobes and isthmus. The other descriptions do not accurately describe this technique."
  },
  {
    "id": 115,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "A cervical lymph node that is tender, mobile, and soft on palpation is most consistent with which cause?",
    "options": {
      "A": "Infection or inflammation",
      "B": "Malignancy",
      "C": "Normal anatomic variant only",
      "D": "Chronic fibrosis"
    },
    "answer": "A",
    "explanation": "Tender, mobile, soft lymph nodes typically indicate a reactive response to infection or inflammation. Malignant nodes are more often fixed, firm, and non-tender."
  },
  {
    "id": 116,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which finding on head inspection would most warrant further investigation for a possible mass or structural abnormality?",
    "options": {
      "A": "An asymmetric contour on palpation of the skull",
      "B": "Symmetric facial expression bilaterally",
      "C": "Hair evenly distributed over the scalp",
      "D": "A skull that is proportionate to body size"
    },
    "answer": "A",
    "explanation": "Asymmetry or an irregular contour on skull palpation may indicate an underlying mass or structural abnormality requiring further workup. The other findings describe normal, reassuring observations."
  },
  {
    "id": 117,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "During cranial nerve screening, asking a client to clench their jaw and resist opening it tests which nerve?",
    "options": {
      "A": "Trigeminal nerve (CN V)",
      "B": "Facial nerve (CN VII)",
      "C": "Hypoglossal nerve (CN XII)",
      "D": "Glossopharyngeal nerve (CN IX)"
    },
    "answer": "A",
    "explanation": "The trigeminal nerve controls the muscles of mastication, tested by jaw clenching against resistance. The facial, hypoglossal, and glossopharyngeal nerves control different functions such as expression, tongue movement, and swallowing."
  },
  {
    "id": 118,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "On thyroid palpation, the nurse notes a firm, fixed, non-tender nodule. This finding is most concerning for what?",
    "options": {
      "A": "Possible thyroid malignancy requiring further workup",
      "B": "A normal variant requiring no follow-up",
      "C": "Acute viral thyroiditis",
      "D": "Simple dehydration"
    },
    "answer": "A",
    "explanation": "A firm, fixed, non-tender thyroid nodule raises concern for malignancy and warrants further diagnostic evaluation such as ultrasound or biopsy. The other options do not typically present with this palpation pattern."
  },
  {
    "id": 119,
    "chapter": 12,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which pair of lymph nodes is located directly in front of and behind the ear?",
    "options": {
      "A": "Preauricular and postauricular nodes",
      "B": "Submandibular and submental nodes",
      "C": "Superficial and deep cervical nodes",
      "D": "Tonsillar and occipital nodes"
    },
    "answer": "A",
    "explanation": "Preauricular nodes sit anterior to the ear and postauricular nodes sit posterior to it, both palpated during the head and neck exam. The other node pairs are located in different regions of the head and neck."
  },
  {
    "id": 120,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Before beginning a formal eye examination, which action should the nurse take first?",
    "options": {
      "A": "Explain the purpose and steps of the examination to the client",
      "B": "Dim the room lights and prepare the ophthalmoscope immediately",
      "C": "Ask the client to remove contact lenses without explanation",
      "D": "Begin testing visual acuity before greeting the client"
    },
    "answer": "A",
    "explanation": "Explaining the purpose builds trust and cooperation before any testing begins. The other options skip orientation and rapport-building steps."
  },
  {
    "id": 121,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which chart is most commonly used to test distance visual acuity?",
    "options": {
      "A": "Snellen chart",
      "B": "Amsler grid",
      "C": "Ishihara plates",
      "D": "Jaeger card"
    },
    "answer": "A",
    "explanation": "The Snellen chart is the standard tool for distance visual acuity screening. The Amsler grid tests central vision distortion, Ishihara plates test color vision, and the Jaeger card tests near vision."
  },
  {
    "id": 122,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "A client reads only the 20/100 line correctly on the Snellen chart. What does this result indicate?",
    "options": {
      "A": "The client sees at 20 feet what a normal eye sees at 100 feet",
      "B": "The client has normal distance visual acuity for their age",
      "C": "The client sees at 100 feet what a normal eye sees at 20 feet",
      "D": "The client has significantly better than average vision"
    },
    "answer": "A",
    "explanation": "A 20/100 result means the client must be 20 feet away to see what someone with normal vision sees at 100 feet, indicating reduced acuity. The reversed and 'better than average' options misstate the ratio."
  },
  {
    "id": 123,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "During external eye inspection, symmetric ptosis in an older adult client is best described as which finding?",
    "options": {
      "A": "A common age-related variation of the eyelid",
      "B": "An urgent sign of acute angle-closure glaucoma",
      "C": "A classic indicator of bacterial conjunctivitis",
      "D": "A sign requiring immediate ophthalmoscopy referral"
    },
    "answer": "A",
    "explanation": "Mild symmetric ptosis is a common finding associated with normal aging due to reduced elasticity. It is not typically linked to glaucoma or conjunctivitis, which have distinct presentations."
  },
  {
    "id": 124,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which cranial nerve is primarily responsible for pupillary constriction in the direct light reflex?",
    "options": {
      "A": "Cranial nerve III (oculomotor)",
      "B": "Cranial nerve II (optic)",
      "C": "Cranial nerve IV (trochlear)",
      "D": "Cranial nerve VI (abducens)"
    },
    "answer": "A",
    "explanation": "The oculomotor nerve carries parasympathetic fibers that constrict the pupil. The optic nerve carries the afferent sensory signal, while IV and VI control eye movement only."
  },
  {
    "id": 125,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "When testing extraocular movements, the nurse asks the client to follow a finger through six cardinal positions. What is being assessed?",
    "options": {
      "A": "Coordinated function of the extraocular muscles and their nerves",
      "B": "The integrity of the retina and optic disc",
      "C": "The client's near and distance visual acuity together",
      "D": "The presence of color vision deficiency"
    },
    "answer": "A",
    "explanation": "The six cardinal positions test coordinated movement controlled by cranial nerves III, IV, and VI. Retinal integrity and acuity are assessed by other techniques."
  },
  {
    "id": 126,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which technique correctly describes proper ophthalmoscopy technique?",
    "options": {
      "A": "Approach from a slight lateral angle and use the right eye for the client's right eye",
      "B": "Stand directly in front of the client and always use only the examiner's left eye",
      "C": "Shine the light directly into the pupil from arm's length away",
      "D": "Ask the client to look directly at the light throughout the exam"
    },
    "answer": "A",
    "explanation": "Standard technique uses a lateral approach with matching eyes (examiner right eye to client right eye) to avoid nose contact and align the visual axis. The other options describe improper positioning."
  },
  {
    "id": 127,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "A fundoscopic exam reveals a pale, well-defined optic disc with sharp margins. How should this finding be classified?",
    "options": {
      "A": "A normal finding consistent with a healthy optic disc",
      "B": "An abnormal finding suggestive of papilledema",
      "C": "An abnormal finding indicating retinal detachment",
      "D": "An abnormal finding consistent with hypertensive retinopathy"
    },
    "answer": "A",
    "explanation": "A well-defined, sharp-margined disc with normal pallor is a normal finding. Papilledema presents with blurred margins and swelling, which is not described here."
  },
  {
    "id": 128,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which documentation practice reflects culturally sensitive eye assessment in a Canadian clinical setting?",
    "options": {
      "A": "Noting client preferences and using a professional interpreter as needed",
      "B": "Assuming eye contact avoidance always indicates disinterest",
      "C": "Skipping documentation of cultural preferences to save time",
      "D": "Using family members as interpreters for all eye exam discussions"
    },
    "answer": "A",
    "explanation": "Respecting client preferences and using professional interpreters supports culturally safe, accurate assessment. Assuming meaning behind eye contact or relying on family interpreters can compromise care and privacy."
  },
  {
    "id": 129,
    "chapter": 13,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "When examining an infant's eyes, which adaptation is most appropriate?",
    "options": {
      "A": "Using a bright toy or light to attract visual attention and fixation",
      "B": "Requesting the infant read the smallest line on a Snellen chart",
      "C": "Performing a full dilated fundus exam without any distraction",
      "D": "Asking the infant to verbally describe visual field boundaries"
    },
    "answer": "A",
    "explanation": "Using an attractive object helps assess visual fixation and tracking in preverbal infants. The other options require verbal cooperation that infants cannot provide."
  },
  {
    "id": 130,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "What is the recommended first step when approaching an ear, nose, mouth, and throat examination?",
    "options": {
      "A": "Gather a focused history of relevant symptoms and prior conditions",
      "B": "Insert the otoscope speculum before any client interview",
      "C": "Palpate the sinuses before introducing yourself to the client",
      "D": "Begin with the oropharyngeal exam before external inspection"
    },
    "answer": "A",
    "explanation": "A focused history guides the examination sequence and identifies areas needing extra attention. Physical steps should follow, not precede, the interview."
  },
  {
    "id": 131,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "To straighten the ear canal for otoscopy in an adult, the pinna should be pulled in which direction?",
    "options": {
      "A": "Up and back",
      "B": "Down and forward",
      "C": "Straight forward only",
      "D": "Down and back"
    },
    "answer": "A",
    "explanation": "In adults, pulling the pinna up and back straightens the ear canal for a clearer view. In infants and young children, the pinna is instead pulled down and back."
  },
  {
    "id": 132,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which screening test uses a vibrating tuning fork placed on the client's forehead or skull midline?",
    "options": {
      "A": "Weber test",
      "B": "Rinne test",
      "C": "Whisper test",
      "D": "Audiometry screening"
    },
    "answer": "A",
    "explanation": "The Weber test places the fork on the midline to compare sound lateralization between ears. The Rinne test compares air and bone conduction at the mastoid, not the midline."
  },
  {
    "id": 133,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "During nasal inspection, purulent discharge combined with tenderness over the maxillary sinuses most likely suggests what condition?",
    "options": {
      "A": "Acute sinusitis",
      "B": "Normal seasonal allergy pattern",
      "C": "Simple nasal septum deviation",
      "D": "Uncomplicated common cold"
    },
    "answer": "A",
    "explanation": "Purulent discharge with sinus tenderness is characteristic of acute sinusitis. Allergies, deviation, and simple colds do not typically present with tender purulent findings together."
  },
  {
    "id": 134,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "When inspecting the oral cavity, white patches that cannot be scraped off the tongue should prompt the nurse to consider which finding?",
    "options": {
      "A": "A potential lesion requiring further evaluation, such as leukoplakia",
      "B": "A normal variant needing no further assessment or follow-up",
      "C": "Simple food debris that will clear with routine brushing",
      "D": "An expected finding in all older adult clients"
    },
    "answer": "A",
    "explanation": "Non-scrapable white patches can indicate leukoplakia, a precancerous lesion requiring referral. This is not a benign or expected finding."
  },
  {
    "id": 135,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Which finding during throat examination requires urgent referral rather than routine documentation?",
    "options": {
      "A": "Asymmetric tonsils with uvula deviation and muffled voice",
      "B": "Mild pink oropharyngeal mucosa without exudate",
      "C": "Symmetric tonsils with normal size for the client's age",
      "D": "A slightly coated tongue with no other abnormal findings"
    },
    "answer": "A",
    "explanation": "Uvula deviation with muffled voice suggests peritonsillar abscess, an emergency requiring urgent referral. The other findings are within normal or minor limits."
  },
  {
    "id": 136,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "Proper equipment care after otoscopy in a Canadian clinical setting includes which practice?",
    "options": {
      "A": "Disposing of single-use speculums and disinfecting the otoscope handle",
      "B": "Reusing the same speculum tip across multiple clients to save cost",
      "C": "Storing the otoscope without cleaning between clinical shifts",
      "D": "Washing the speculum tip with tap water only after each use"
    },
    "answer": "A",
    "explanation": "Proper infection control requires disposing of single-use specula and disinfecting reusable equipment. Reusing tips or inadequate cleaning risks cross-contamination."
  },
  {
    "id": 137,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "When examining a young child's ear, how should the pinna be positioned to straighten the canal?",
    "options": {
      "A": "Down and back",
      "B": "Up and back",
      "C": "Up and forward",
      "D": "Straight up only"
    },
    "answer": "A",
    "explanation": "In infants and young children, the ear canal curves differently than in adults, so the pinna is pulled down and back rather than up and back."
  },
  {
    "id": 138,
    "chapter": 14,
    "domain": "Regional Examination: Skin & HEENT",
    "question": "An older adult client reports difficulty understanding conversation in noisy environments. Which consideration is most relevant to this special population?",
    "options": {
      "A": "Presbycusis causing high-frequency sensorineural hearing loss",
      "B": "Acute otitis media requiring immediate antibiotic therapy",
      "C": "A normal finding requiring no further hearing assessment",
      "D": "Nasal congestion affecting auditory processing ability"
    },
    "answer": "A",
    "explanation": "Presbycusis, age-related high-frequency hearing loss, commonly causes difficulty in noisy settings. It is a recognized condition warranting further screening, not a nasal or acute infectious issue."
  },
  {
    "id": 139,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which landmark is used to count intercostal spaces during thoracic examination?",
    "options": {
      "A": "The angle of Louis (sternal angle)",
      "B": "The xiphoid process only",
      "C": "The suprasternal notch alone",
      "D": "The costal margin at the umbilicus"
    },
    "answer": "A",
    "explanation": "The angle of Louis marks the second rib and is the standard starting point for counting intercostal spaces. The other landmarks are not used for this systematic counting."
  },
  {
    "id": 140,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "On inspection of the chest wall, which finding is considered a normal anatomical variant rather than a pathological deformity?",
    "options": {
      "A": "A slightly increased anteroposterior diameter in an infant",
      "B": "A pronounced barrel chest in a young healthy adult",
      "C": "Severe pectus excavatum causing cardiac displacement",
      "D": "Marked kyphoscoliosis compressing lung volume"
    },
    "answer": "A",
    "explanation": "Infants normally have a rounder chest with a higher anteroposterior-to-lateral ratio that decreases with age. The other findings represent pathological deformities."
  },
  {
    "id": 141,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "During palpation of the thorax, decreased tactile fremitus over one lung field most likely suggests what condition?",
    "options": {
      "A": "Pleural effusion or pneumothorax obstructing sound transmission",
      "B": "Normal lung tissue with expected vibration patterns",
      "C": "Consolidation from pneumonia increasing vibration transmission",
      "D": "A healthy airway with no underlying abnormality"
    },
    "answer": "A",
    "explanation": "Fluid or air in the pleural space dampens vibration transmission, decreasing fremitus. Consolidation typically increases fremitus, the opposite finding."
  },
  {
    "id": 142,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which percussion note is expected over normal, healthy lung tissue?",
    "options": {
      "A": "Resonance",
      "B": "Dullness",
      "C": "Flatness",
      "D": "Hyperresonance"
    },
    "answer": "A",
    "explanation": "Resonance is the expected percussion note over normally aerated lung tissue. Dullness and flatness suggest fluid or consolidation, while hyperresonance suggests trapped air."
  },
  {
    "id": 143,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What is the correct sequence for a systematic thoracic auscultation exam?",
    "options": {
      "A": "Compare side-to-side from apices to bases in a systematic pattern",
      "B": "Auscultate only the anterior chest in one continuous vertical line",
      "C": "Listen randomly over the chest without a consistent pattern",
      "D": "Auscultate only where the client reports symptoms"
    },
    "answer": "A",
    "explanation": "A systematic side-to-side comparison from apex to base ensures full lung coverage and accurate detection of asymmetry. Random or symptom-only auscultation risks missing findings."
  },
  {
    "id": 144,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Fine, high-pitched crackling sounds heard at the end of inspiration are best classified as which adventitious sound?",
    "options": {
      "A": "Fine crackles",
      "B": "Wheezes",
      "C": "Pleural friction rub",
      "D": "Rhonchi"
    },
    "answer": "A",
    "explanation": "Fine crackles are brief, high-pitched, end-inspiratory sounds often linked to fluid or fibrosis. Wheezes are continuous musical sounds, and rhonchi are coarser and lower-pitched."
  },
  {
    "id": 145,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A continuous, low-pitched, snoring-like sound heard on auscultation that clears with coughing is best described as which finding?",
    "options": {
      "A": "Rhonchi",
      "B": "Fine crackles",
      "C": "Pleural friction rub",
      "D": "Stridor"
    },
    "answer": "A",
    "explanation": "Rhonchi are low-pitched, snoring-like sounds caused by secretions in larger airways and often clear with coughing. Crackles do not clear with cough, and stridor is a high-pitched upper airway sound."
  },
  {
    "id": 146,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "When documenting thoracic findings, which approach best integrates inspection, palpation, percussion, and auscultation data?",
    "options": {
      "A": "Correlating all four techniques to form a cohesive clinical picture",
      "B": "Recording only auscultation findings since they are most important",
      "C": "Documenting each technique in isolation without cross-referencing",
      "D": "Omitting percussion findings if breath sounds seem normal"
    },
    "answer": "A",
    "explanation": "Integrating findings across all four techniques provides the most accurate clinical picture. Relying on one technique or omitting steps risks missing important abnormalities."
  },
  {
    "id": 147,
    "chapter": 15,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "When adapting the thoracic exam for a bedridden older adult, which modification is most appropriate?",
    "options": {
      "A": "Repositioning the client and examining posterior fields with support as needed",
      "B": "Skipping posterior auscultation entirely to save time",
      "C": "Requiring the client to sit fully upright unassisted for the exam",
      "D": "Performing only anterior chest percussion in all cases"
    },
    "answer": "A",
    "explanation": "Careful repositioning with support allows access to posterior lung fields even in bedridden clients. Skipping posterior fields or requiring unsupported positioning may be unsafe or incomplete."
  },
  {
    "id": 148,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which client position is recommended for assessing jugular venous pressure?",
    "options": {
      "A": "Semi-Fowler's position at a 30 to 45 degree angle",
      "B": "Fully supine flat position with no elevation",
      "C": "Standing upright with the neck fully extended",
      "D": "Left lateral recumbent position at all times"
    },
    "answer": "A",
    "explanation": "Semi-Fowler's position at 30 to 45 degrees is standard for jugular venous pressure assessment because it allows visualization of the venous pulsation. Fully flat or standing positions distort the measurement."
  },
  {
    "id": 149,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "During carotid pulse assessment, palpating both carotid arteries simultaneously is discouraged for which reason?",
    "options": {
      "A": "It may reduce cerebral blood flow and cause syncope",
      "B": "It always produces a falsely elevated pulse reading",
      "C": "It is required to detect a bruit accurately",
      "D": "It has no clinical risk and is standard practice"
    },
    "answer": "A",
    "explanation": "Simultaneous bilateral carotid palpation can compromise cerebral perfusion and cause syncope, so arteries are assessed one at a time. It does not falsely elevate readings and is not standard practice."
  },
  {
    "id": 150,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A carotid bruit heard on auscultation is best described as which type of sound?",
    "options": {
      "A": "A blowing, swishing sound suggesting turbulent blood flow",
      "B": "A normal vascular sound present in all healthy adults",
      "C": "A high-pitched click synchronized with the S1 heart sound",
      "D": "A silent finding detectable only by palpation"
    },
    "answer": "A",
    "explanation": "A bruit is a blowing, swishing sound caused by turbulent flow, often from arterial narrowing, and is not a normal finding. It is heard by auscultation, not detected by palpation alone."
  },
  {
    "id": 151,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Where is the point of maximal impulse normally palpated during precordium examination?",
    "options": {
      "A": "Fifth intercostal space at the midclavicular line",
      "B": "Second intercostal space at the right sternal border",
      "C": "Fourth intercostal space at the left sternal border",
      "D": "Seventh intercostal space near the xiphoid process"
    },
    "answer": "A",
    "explanation": "The point of maximal impulse is normally located at the fifth intercostal space, midclavicular line. The other locations correspond to different auscultation areas, not the normal apical impulse site."
  },
  {
    "id": 152,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What is the recommended sequence for cardiac auscultation across the precordium?",
    "options": {
      "A": "Moving systematically through the aortic, pulmonic, tricuspid, and mitral areas",
      "B": "Listening only at the apex since all sounds radiate there equally",
      "C": "Auscultating randomly wherever the stethoscope is first placed",
      "D": "Starting at the mitral area and skipping the remaining areas"
    },
    "answer": "A",
    "explanation": "A systematic sequence through the four standard auscultation areas ensures thorough assessment of each valve region. Random or apex-only auscultation risks missing important findings."
  },
  {
    "id": 153,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which heart sound corresponds to closure of the mitral and tricuspid valves?",
    "options": {
      "A": "S1",
      "B": "S2",
      "C": "S3",
      "D": "S4"
    },
    "answer": "A",
    "explanation": "S1 marks closure of the atrioventricular valves, mitral and tricuspid, at the start of systole. S2 corresponds to semilunar valve closure, while S3 and S4 are extra sounds."
  },
  {
    "id": 154,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "An S3 heart sound heard in a healthy 25-year-old client is best interpreted as which finding?",
    "options": {
      "A": "A normal physiological variant common in younger adults",
      "B": "An abnormal sign of severe left ventricular failure",
      "C": "A definitive indicator of mitral valve stenosis",
      "D": "A sign requiring immediate emergency cardiac intervention"
    },
    "answer": "A",
    "explanation": "An S3 can be a normal finding in children, young adults, and pregnancy due to rapid ventricular filling. In older adults, the same sound often signals heart failure, but not in this healthy young client."
  },
  {
    "id": 155,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A client with a history of long-standing hypertension presents with a loud S4 heart sound. This finding most likely correlates with which condition?",
    "options": {
      "A": "Left ventricular hypertrophy from chronic pressure overload",
      "B": "Normal aging with no clinical significance",
      "C": "Acute pulmonary embolism affecting the right heart",
      "D": "Simple anemia causing a hyperdynamic circulation"
    },
    "answer": "A",
    "explanation": "An S4 reflects atrial contraction against a stiff, hypertrophied ventricle, commonly seen with chronic hypertension. It is not an expected normal aging finding or typical of anemia or embolism."
  },
  {
    "id": 156,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which client preparation step is recommended before beginning the cardiac and neck vessel examination?",
    "options": {
      "A": "Positioning the client comfortably and exposing the chest with draping",
      "B": "Requesting the client stand throughout the entire examination",
      "C": "Beginning auscultation before assessing pulses or vital signs",
      "D": "Dimming the room lights before any inspection begins"
    },
    "answer": "A",
    "explanation": "Proper positioning and appropriate draping ensure comfort and access while preserving privacy. Standing throughout or skipping preliminary steps disrupts systematic assessment."
  },
  {
    "id": 157,
    "chapter": 16,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A widely split S2 that persists throughout the respiratory cycle most likely correlates with which condition?",
    "options": {
      "A": "Right bundle branch block delaying pulmonic valve closure",
      "B": "A normal finding present in all healthy adults at rest",
      "C": "Mitral valve prolapse producing a mid-systolic click",
      "D": "Simple physiological splitting heard only on inspiration"
    },
    "answer": "A",
    "explanation": "A fixed, wide splitting of S2 that does not vary with respiration suggests conduction delay such as right bundle branch block. Physiological splitting normally varies with respiration, unlike this fixed pattern."
  },
  {
    "id": 158,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which sequence best reflects a peripheral vascular examination approach?",
    "options": {
      "A": "Inspect first, then palpate pulses, then assess perfusion and edema",
      "B": "Auscultate bruits first, then inspect skin, then check reflexes",
      "C": "Palpate pulses first, then inspect, then percuss the extremities",
      "D": "Assess edema first, then auscultate, then inspect the nail beds"
    },
    "answer": "A",
    "explanation": "Inspection before touch avoids missing visual clues and follows the standard sequence; the other orders skip or misplace inspection."
  },
  {
    "id": 159,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A client's dorsalis pedis pulse is difficult to palpate bilaterally. What should the nurse do next?",
    "options": {
      "A": "Use a Doppler device to confirm presence of the pulse",
      "B": "Document the pulse as completely absent without further check",
      "C": "Assume normal circulation and proceed to the next system",
      "D": "Immediately apply a warm compress to both feet"
    },
    "answer": "A",
    "explanation": "A Doppler helps confirm a weak or non-palpable pulse before concluding it is absent, since dorsalis pedis pulses are congenitally absent in some people. The other actions skip verification or jump to unwarranted treatment."
  },
  {
    "id": 160,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Capillary refill greater than how many seconds suggests impaired perfusion in an adult?",
    "options": {
      "A": "More than 2 to 3 seconds after nail bed pressure",
      "B": "More than 5 to 6 seconds after nail bed pressure",
      "C": "More than 8 to 9 seconds after nail bed pressure",
      "D": "More than 10 to 12 seconds after nail bed pressure"
    },
    "answer": "A",
    "explanation": "Refill beyond 2 to 3 seconds is the accepted threshold for delayed capillary refill in adults. The other options are too long to reflect early perfusion compromise."
  },
  {
    "id": 161,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which grading finding best describes 4+ pitting edema?",
    "options": {
      "A": "A very deep pit that remains visible for over 20 seconds",
      "B": "A barely detectable pit that disappears within a few seconds",
      "C": "A moderate pit lasting about 10 to 15 seconds only",
      "D": "A slight pit noticeable only with firm sustained pressure"
    },
    "answer": "A",
    "explanation": "4+ edema is the most severe grade, marked by a deep, long-lasting pit. The other descriptions correspond to milder grades of pitting."
  },
  {
    "id": 162,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which finding is most suggestive of peripheral arterial disease rather than venous disease?",
    "options": {
      "A": "Cool, pale skin with pain that worsens on leg elevation",
      "B": "Brownish skin discoloration with pain relieved by elevation",
      "C": "Warm skin with aching that improves with leg elevation",
      "D": "Mild ankle swelling that resolves overnight with rest"
    },
    "answer": "A",
    "explanation": "Arterial disease causes coolness, pallor, and pain that worsens with elevation due to reduced inflow. The other findings describe venous insufficiency or benign swelling."
  },
  {
    "id": 163,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "During the diabetic foot screen, which tool assesses protective sensation?",
    "options": {
      "A": "A 10-gram monofilament applied to specific plantar landmark sites",
      "B": "A tuning fork applied only to the great toenail bed",
      "C": "A reflex hammer tapped repeatedly against the client's heel",
      "D": "A sphygmomanometer cuff inflated snugly around the client's forefoot"
    },
    "answer": "A",
    "explanation": "The monofilament test specifically screens for loss of protective sensation in diabetic feet. The other tools test different functions or are not standard for this screen."
  },
  {
    "id": 164,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Where should the nurse palpate to assess the epitrochlear lymph nodes?",
    "options": {
      "A": "Above and behind the medial epicondyle of the humerus",
      "B": "Directly over the lateral aspect of the wrist joint",
      "C": "Along the anterior border of the sternocleidomastoid muscle",
      "D": "Just below the inguinal ligament near the femoral pulse"
    },
    "answer": "A",
    "explanation": "Epitrochlear nodes lie above and posterior to the medial epicondyle in the upper arm. The other locations correspond to different lymph node groups or structures."
  },
  {
    "id": 165,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "An older adult client has unilateral leg swelling, warmth, and tenderness. What should the nurse suspect?",
    "options": {
      "A": "Possible deep vein thrombosis requiring prompt further clinical assessment",
      "B": "A normal age-related venous change needing no further action",
      "C": "Chronic arterial insufficiency stemming from long-standing atherosclerosis progression",
      "D": "Lymphedema secondary to a previous minor ankle sprain injury"
    },
    "answer": "A",
    "explanation": "Unilateral warmth, swelling, and tenderness are classic red flags for DVT and warrant urgent follow-up. The other options do not fit this acute unilateral presentation."
  },
  {
    "id": 166,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "When examining an older adult's peripheral pulses, what practical consideration applies?",
    "options": {
      "A": "Pulses may be harder to palpate due to arterial stiffening",
      "B": "Pulses are always bounding and easier to palpate than younger adults",
      "C": "Peripheral pulses disappear entirely as a normal aging change",
      "D": "Only the radial pulse needs to be assessed in older adults"
    },
    "answer": "A",
    "explanation": "Age-related arterial changes can make pulses feel diminished or harder to locate, requiring careful technique. The other statements overgeneralize or incorrectly describe normal aging."
  },
  {
    "id": 167,
    "chapter": 17,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What is the best next action if a client shows unequal pulses between both legs?",
    "options": {
      "A": "Further assess for arterial obstruction and promptly report the finding",
      "B": "Document it as a normal anatomical variant and move on",
      "C": "Recheck only if the client later reports new leg pain",
      "D": "Apply compression stockings immediately before completing the rest of the assessment"
    },
    "answer": "A",
    "explanation": "Pulse asymmetry between limbs is a warning sign of arterial obstruction and needs prompt further assessment and reporting. The other responses dismiss or delay addressing a significant finding."
  },
  {
    "id": 168,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "In what position should the client be examined to accentuate breast dimpling or retraction on inspection?",
    "options": {
      "A": "Sitting with arms raised overhead and then hands on hips",
      "B": "Lying supine with both arms resting at the sides",
      "C": "Standing with arms crossed tightly over the chest",
      "D": "Sitting with the head turned away from the examiner"
    },
    "answer": "A",
    "explanation": "Raising the arms and pressing hands on hips contracts pectoral muscles and reveals subtle dimpling or retraction. The other positions do not accentuate these changes as effectively."
  },
  {
    "id": 169,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What palpation pattern is recommended to ensure complete breast tissue coverage?",
    "options": {
      "A": "A systematic vertical strip or concentric circle pattern",
      "B": "A single quick pass using only the fingertips",
      "C": "Random palpation focused only on the nipple area",
      "D": "Palpation limited to the upper outer quadrant only"
    },
    "answer": "A",
    "explanation": "A systematic pattern such as vertical strips ensures all breast tissue is examined without gaps. The other approaches risk missing significant areas of tissue."
  },
  {
    "id": 170,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which lymph node group should be assessed as part of the axillary examination?",
    "options": {
      "A": "Central, pectoral, subscapular, and lateral groups of axillary nodes",
      "B": "Only the supraclavicular nodes located on the affected side",
      "C": "Occipital and postauricular node groups exclusively, near the scalp",
      "D": "Popliteal and inguinal node groups located bilaterally in the legs"
    },
    "answer": "A",
    "explanation": "The axillary exam includes central, pectoral, subscapular, and lateral node groups that drain the breast. The other node groups drain unrelated regions."
  },
  {
    "id": 171,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "How should breast examination technique be adapted for a transgender client on hormone therapy?",
    "options": {
      "A": "Base technique on current breast tissue present, not gender identity",
      "B": "Skip the examination entirely regardless of tissue present",
      "C": "Always perform the exam exactly as for cisgender men",
      "D": "Assume no risk exists regardless of hormone exposure"
    },
    "answer": "A",
    "explanation": "Examination should be guided by the actual tissue present and individual risk factors, not assumptions based on gender identity. The other options ignore clinical relevance or individualized care."
  },
  {
    "id": 172,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What is the current approach to breast self-awareness compared to formal self-examination?",
    "options": {
      "A": "Encourage familiarity with normal appearance rather than a rigid monthly exam",
      "B": "Require a strict monthly self-examination performed using one fixed technique",
      "C": "Discourage clients from paying any attention to their own breast changes",
      "D": "Replace all clinical screening entirely with self-examination performed alone"
    },
    "answer": "A",
    "explanation": "Current guidance emphasizes general breast self-awareness so clients notice changes, rather than a rigid formal self-exam ritual. The other options misrepresent this shift in practice."
  },
  {
    "id": 173,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which documentation detail is essential when charting a breast mass finding?",
    "options": {
      "A": "Location by clock position and distance from the nipple",
      "B": "Only a general statement that a lump was felt",
      "C": "The client's emotional reaction to the finding alone",
      "D": "A note that the finding will be checked again eventually"
    },
    "answer": "A",
    "explanation": "Precise location using clock position and distance from the nipple allows accurate tracking and communication. The other options lack the specificity needed for clinical documentation."
  },
  {
    "id": 174,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "A client becomes visibly anxious before a breast examination due to a past traumatic experience. What is the best initial nursing action?",
    "options": {
      "A": "Pause to explain the steps and obtain explicit ongoing consent",
      "B": "Proceed quickly so the exam is over as soon as possible",
      "C": "Ask a family member to hold the client still",
      "D": "Cancel all future health assessments for this client"
    },
    "answer": "A",
    "explanation": "Trauma-informed care involves explaining steps, checking in, and confirming consent throughout the exam to restore a sense of control. The other actions increase distress or are disproportionate."
  },
  {
    "id": 175,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "Which finding on breast examination most warrants prompt referral?",
    "options": {
      "A": "A firm, irregular, non-mobile mass with associated skin dimpling",
      "B": "Bilateral breast tenderness that varies predictably with the menstrual cycle",
      "C": "Symmetrical fibroglandular tissue felt equally in both breasts bilaterally",
      "D": "Mild nipple sensitivity noted only during the luteal phase"
    },
    "answer": "A",
    "explanation": "A firm, irregular, fixed mass with skin changes raises concern for malignancy and needs referral. The other findings are common benign, cyclical variations."
  },
  {
    "id": 176,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "What is the purpose of examining regional lymph nodes during a breast assessment?",
    "options": {
      "A": "To detect possible spread of disease along breast drainage pathways",
      "B": "To measure the client's overall cardiovascular fitness level",
      "C": "To assess hydration status through nodal turgor changes",
      "D": "To confirm the client's respiratory rate is within normal limits"
    },
    "answer": "A",
    "explanation": "Lymph nodes draining the breast can enlarge with malignant spread or infection, making their assessment clinically important. The other options are unrelated to lymph node evaluation."
  },
  {
    "id": 177,
    "chapter": 18,
    "domain": "Regional Examination: Thoracic & Cardiovascular",
    "question": "When approaching a breast and axillary examination, what should the nurse do before beginning?",
    "options": {
      "A": "Explain the procedure clearly and obtain the client's informed consent",
      "B": "Perform the exam silently to avoid causing client embarrassment",
      "C": "Begin palpation immediately to save valuable appointment time overall",
      "D": "Ask the client to leave the room and undress completely alone"
    },
    "answer": "A",
    "explanation": "Clear explanation and consent establish trust and ensure the client understands what to expect. The other options bypass communication that is essential to respectful care."
  },
  {
    "id": 178,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Why does the abdominal examination sequence differ from other body systems?",
    "options": {
      "A": "Auscultation is performed before palpation to avoid altering bowel sounds",
      "B": "Percussion is always performed before any other technique is used",
      "C": "Palpation is done first to relax the client before inspection",
      "D": "Inspection is skipped entirely because it rarely reveals useful findings"
    },
    "answer": "A",
    "explanation": "Auscultation precedes palpation and percussion because touching the abdomen can artificially stimulate or alter bowel sounds. The other sequences would compromise accurate findings."
  },
  {
    "id": 179,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "In which abdominal quadrant would the nurse expect to assess the appendix?",
    "options": {
      "A": "The right lower quadrant, near McBurney's point on the abdomen",
      "B": "The left upper quadrant, near the spleen and stomach",
      "C": "The right upper quadrant, near the liver and gallbladder",
      "D": "The left lower quadrant, near the sigmoid colon region"
    },
    "answer": "A",
    "explanation": "The appendix is typically located in the right lower quadrant near McBurney's point. The other quadrants contain different organs, such as the spleen or liver."
  },
  {
    "id": 180,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What is the expected normal finding when auscultating bowel sounds?",
    "options": {
      "A": "Irregular clicks and gurgles occurring every 5 to 15 seconds",
      "B": "Complete silence lasting several minutes in every quadrant",
      "C": "A continuous rumbling sound without any pauses at all",
      "D": "High-pitched rushes heard only in the right upper quadrant"
    },
    "answer": "A",
    "explanation": "Normal bowel sounds are irregular clicks and gurgles occurring roughly every 5 to 15 seconds. The other patterns suggest absent, hyperactive, or abnormal findings."
  },
  {
    "id": 181,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What percussion note is expected over most of a normal abdomen?",
    "options": {
      "A": "Tympany, produced by the air-filled loops of bowel present",
      "B": "Dullness, produced by solid organ tissue found throughout the abdomen",
      "C": "Flatness, similar to the note heard when percussing over the thigh",
      "D": "Hyperresonance, similar to the note heard when percussing over the lungs"
    },
    "answer": "A",
    "explanation": "Tympany predominates over the abdomen because of gas within the bowel. The other notes are expected only over solid organs or are not typical abdominal findings."
  },
  {
    "id": 182,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which technique differentiates light palpation from deep palpation?",
    "options": {
      "A": "Light palpation assesses surface tenderness; deep palpation assesses organs and masses",
      "B": "Light palpation is used only on infants; deep palpation only on adults",
      "C": "Light palpation requires two hands; deep palpation requires one hand",
      "D": "Light palpation is performed after auscultation only in emergencies"
    },
    "answer": "A",
    "explanation": "Light palpation screens for surface tenderness and guarding, while deep palpation evaluates organ borders and masses. The other distinctions misstate the actual technique differences."
  },
  {
    "id": 183,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A client presents with rigid, board-like abdominal wall and rebound tenderness. What does this suggest?",
    "options": {
      "A": "A possible acute abdomen requiring urgent further clinical evaluation",
      "B": "Normal muscular guarding arising simply from client anxiety alone",
      "C": "Simple constipation that will likely resolve without any treatment",
      "D": "An expected finding that follows after eating a large recent meal"
    },
    "answer": "A",
    "explanation": "Rigidity with rebound tenderness are classic peritoneal signs suggesting an acute, potentially surgical abdomen. The other explanations do not account for these serious signs."
  },
  {
    "id": 184,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which special technique helps confirm the presence of ascites?",
    "options": {
      "A": "Testing for a fluid wave and checking for shifting dullness",
      "B": "Auscultating carefully for bruits heard over the renal arteries",
      "C": "Palpating for costovertebral angle tenderness only, near the flank",
      "D": "Percussing the liver span along the midclavicular line only"
    },
    "answer": "A",
    "explanation": "Fluid wave testing and shifting dullness are specific techniques used to detect free fluid in the abdomen. The other techniques assess unrelated structures or findings."
  },
  {
    "id": 185,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "How should abdominal palpation be adapted for a pregnant client in the third trimester?",
    "options": {
      "A": "Use gentler pressure and avoid supine positioning for prolonged periods",
      "B": "Use identical deep palpation force as with non-pregnant clients",
      "C": "Skip palpation entirely for all clients who are pregnant",
      "D": "Position the client prone to improve access to the abdomen"
    },
    "answer": "A",
    "explanation": "Gentler technique and avoiding prolonged supine positioning prevent discomfort and supine hypotensive syndrome. The other approaches are unsafe or impractical during late pregnancy."
  },
  {
    "id": 186,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What underlying structures are typically located in the epigastric region?",
    "options": {
      "A": "The stomach, duodenum, and pancreas, located centrally in the upper abdomen",
      "B": "The bladder and reproductive organs, located low in the pelvis",
      "C": "The ascending and descending colon, located along the abdominal flanks",
      "D": "Both kidneys and the adrenal glands, located posteriorly in the abdomen"
    },
    "answer": "A",
    "explanation": "The epigastric region overlies the stomach, duodenum, and pancreas. The other organ groups are located in different abdominal regions."
  },
  {
    "id": 187,
    "chapter": 19,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Why is it important to ask the client to point to the area of pain before palpation?",
    "options": {
      "A": "So the painful area can be palpated last to reduce guarding",
      "B": "So the nurse can skip auscultation in that quadrant entirely",
      "C": "So percussion can be avoided throughout the whole abdomen",
      "D": "So the client can be repositioned prone for comfort"
    },
    "answer": "A",
    "explanation": "Palpating the painful area last helps minimize voluntary guarding and gives a more accurate assessment of other regions first. The other options are not standard rationale for this practice."
  },
  {
    "id": 188,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What is the primary purpose of the musculoskeletal examination?",
    "options": {
      "A": "To evaluate joint function, muscle strength, and structural alignment",
      "B": "To measure blood flow through major peripheral arteries",
      "C": "To assess cranial nerve function throughout the body",
      "D": "To evaluate bowel motility and abdominal organ size"
    },
    "answer": "A",
    "explanation": "The musculoskeletal exam focuses on joints, muscles, and alignment to detect functional or structural abnormalities. The other options describe unrelated body systems."
  },
  {
    "id": 189,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which approach best describes the general head-to-toe joint examination?",
    "options": {
      "A": "Inspect, palpate, and test range of motion at each major joint in sequence",
      "B": "Test only the joints the client specifically reports as painful",
      "C": "Assess only range of motion, skipping inspection and palpation",
      "D": "Examine joints randomly without following any consistent order"
    },
    "answer": "A",
    "explanation": "A systematic head-to-toe approach with inspection, palpation, and range of motion ensures no joint is overlooked. The other approaches risk missing significant findings."
  },
  {
    "id": 190,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What does the spine examination assess in addition to range of motion?",
    "options": {
      "A": "Curvature and posture, including signs of scoliosis or kyphosis",
      "B": "Only reflexes tested in the lower extremities bilaterally, nothing else",
      "C": "Cranial nerve integrity assessed along the entire length of the spine",
      "D": "Peripheral pulses palpated along the paraspinal muscle groups only"
    },
    "answer": "A",
    "explanation": "Spine assessment includes evaluating curvature and posture for abnormalities such as scoliosis or kyphosis, not just motion. The other options are unrelated assessments."
  },
  {
    "id": 191,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which gait characteristic should the nurse observe during a gait assessment?",
    "options": {
      "A": "Stride length, symmetry, and stability throughout the walking cycle",
      "B": "Only the speed at which the client can run briefly",
      "C": "The colour of the client's footwear during ambulation",
      "D": "Heart rate response measured only after gait is complete"
    },
    "answer": "A",
    "explanation": "Stride length, symmetry, and stability are key components observed during gait assessment. The other options are not relevant gait characteristics."
  },
  {
    "id": 192,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which tool is commonly used to screen functional mobility and fall risk?",
    "options": {
      "A": "The Timed Up and Go test, a brief mobility screening tool",
      "B": "The Snellen visual acuity chart, used to test distance vision",
      "C": "The Glasgow Coma Scale, used to assess level of consciousness",
      "D": "The Mini Nutritional Assessment, used to screen nutritional status"
    },
    "answer": "A",
    "explanation": "The Timed Up and Go test measures functional mobility and helps screen for fall risk. The other tools assess vision, consciousness, and nutrition respectively."
  },
  {
    "id": 193,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "How should the musculoskeletal exam be adapted for a young child in a pediatric setting?",
    "options": {
      "A": "Use play-based, age-appropriate techniques to gain the child's cooperation",
      "B": "Use the identical formal sequence that is used for adult clients",
      "C": "Avoid examining any joints entirely until the child becomes a teenager",
      "D": "Rely solely on parental report without any direct observation of movement"
    },
    "answer": "A",
    "explanation": "Play-based, developmentally appropriate techniques help engage children and yield more accurate findings. The other approaches are impractical or incomplete for this population."
  },
  {
    "id": 194,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which finding on joint examination is considered abnormal and warrants further evaluation?",
    "options": {
      "A": "Joint swelling, warmth, and restricted range of motion at the joint",
      "B": "Full, pain-free range of motion present in all major joints",
      "C": "Symmetrical muscle bulk found without tenderness noted on palpation",
      "D": "Normal joint alignment present without crepitus noted during movement"
    },
    "answer": "A",
    "explanation": "Swelling, warmth, and restricted motion suggest inflammation or joint pathology requiring further evaluation. The other findings describe normal musculoskeletal status."
  },
  {
    "id": 195,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What is crepitus, as noted during a joint examination?",
    "options": {
      "A": "A palpable or audible grating sensation felt during joint movement",
      "B": "A measurable reduction noted in overall limb circumference over time",
      "C": "An involuntary muscle spasm that occurs while the client is at rest",
      "D": "A visible skin rash noted overlying the affected joint area"
    },
    "answer": "A",
    "explanation": "Crepitus refers to a grating sensation or sound felt or heard with joint movement, often from cartilage changes. The other descriptions do not match this specific finding."
  },
  {
    "id": 196,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "An older adult client demonstrates a shuffling, wide-based gait with reduced arm swing. What should the nurse consider?",
    "options": {
      "A": "A possible neurological or musculoskeletal gait abnormality needing follow-up",
      "B": "A completely normal variation requiring no further assessment",
      "C": "A sign of excellent balance and fall prevention capacity",
      "D": "An expected finding unrelated to any underlying condition"
    },
    "answer": "A",
    "explanation": "A shuffling, wide-based gait with reduced arm swing can indicate neurological or musculoskeletal impairment and fall risk, warranting further follow-up. The other options dismiss a clinically relevant finding."
  },
  {
    "id": 197,
    "chapter": 20,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "What is the best next action when a client reports new, unexplained joint pain with visible deformity?",
    "options": {
      "A": "Perform a focused assessment and refer for further evaluation",
      "B": "Document the report only and reassess at the next annual visit",
      "C": "Advise the client that deformity is a normal aging change",
      "D": "Recommend increased activity to strengthen the affected joint"
    },
    "answer": "A",
    "explanation": "New joint pain with visible deformity warrants prompt focused assessment and referral to rule out significant pathology. The other responses delay necessary evaluation or provide inappropriate reassurance."
  },
  {
    "id": 198,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A nurse organizing a full neurological examination should proceed in which general sequence?",
    "options": {
      "A": "Mental status, cranial nerves, motor system, sensory system, reflexes, coordination",
      "B": "Cranial nerves, reflexes, mental status, sensory system, motor system, coordination",
      "C": "Coordination, motor system, mental status, cranial nerves, reflexes, sensory system",
      "D": "Reflexes, sensory system, coordination, mental status, cranial nerves, motor system"
    },
    "answer": "A",
    "explanation": "The standard framework begins with mental status as the gateway, then proceeds cranial nerves through motor, sensory, reflexes, and coordination. The other sequences scramble this logical progression."
  },
  {
    "id": 199,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Why is mental status assessment described as the gateway to the neurological exam?",
    "options": {
      "A": "Impaired cognition can make the rest of the exam unreliable to interpret",
      "B": "It requires the most specialized equipment of any exam component",
      "C": "It is always tested last after all other systems are examined",
      "D": "It has no bearing on how other findings are later interpreted"
    },
    "answer": "A",
    "explanation": "If a patient cannot attend or cooperate, findings on later components may be unreliable, so mental status is assessed first. The other options misstate its timing or relevance."
  },
  {
    "id": 200,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Testing a patient's sense of smell with a familiar odour assesses which cranial nerve?",
    "options": {
      "A": "Cranial nerve I, the olfactory nerve",
      "B": "Cranial nerve II, the optic nerve",
      "C": "Cranial nerve V, the trigeminal nerve",
      "D": "Cranial nerve VII, the facial nerve"
    },
    "answer": "A",
    "explanation": "Smell is mediated by the olfactory nerve, cranial nerve I. The optic nerve governs vision, the trigeminal governs facial sensation, and the facial nerve governs expression."
  },
  {
    "id": 201,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A patient's pupil fails to constrict when light is shone directly into it. Which nerve pathway is most implicated?",
    "options": {
      "A": "The optic and oculomotor nerves controlling the pupillary light reflex",
      "B": "The trochlear and abducens nerves controlling lateral eye movement",
      "C": "The trigeminal nerve controlling corneal sensation and blink response",
      "D": "The facial nerve controlling eyelid closure and blinking strength"
    },
    "answer": "A",
    "explanation": "The pupillary light reflex depends on the optic nerve as the sensory limb and the oculomotor nerve as the motor limb. The other nerves govern eye movement, corneal sensation, or eyelid closure, not pupil constriction."
  },
  {
    "id": 202,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which three cranial nerves together coordinate the extraocular movements of the eye?",
    "options": {
      "A": "Oculomotor, trochlear, and abducens nerves",
      "B": "Olfactory, optic, and trigeminal nerves",
      "C": "Facial, vestibulocochlear, and glossopharyngeal nerves",
      "D": "Vagus, accessory, and hypoglossal nerves"
    },
    "answer": "A",
    "explanation": "Cranial nerves III, IV, and VI innervate the extraocular muscles that coordinate eye movement. The other groups govern smell, vision, hearing, or lower cranial nerve functions unrelated to eye movement."
  },
  {
    "id": 203,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Asymmetric drooping of one side of the mouth with forehead sparing suggests a lesion of which nerve, and at what level?",
    "options": {
      "A": "Facial nerve, an upper motor neuron lesion sparing forehead fibres",
      "B": "Trigeminal nerve, a lower motor neuron lesion affecting all branches",
      "C": "Facial nerve, a lower motor neuron lesion affecting the whole face",
      "D": "Hypoglossal nerve, an upper motor neuron lesion of the tongue"
    },
    "answer": "A",
    "explanation": "Forehead sparing indicates an upper motor neuron facial lesion, because forehead muscles receive bilateral cortical input. A lower motor neuron lesion would affect the entire side of the face including the forehead."
  },
  {
    "id": 204,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which cluster of cranial nerves is assessed by evaluating hearing, swallowing, shoulder shrug, and tongue protrusion?",
    "options": {
      "A": "Cranial nerves VIII through XII",
      "B": "Cranial nerves I through IV",
      "C": "Cranial nerves III, IV, and VI only",
      "D": "Cranial nerves V and VII only"
    },
    "answer": "A",
    "explanation": "Hearing, swallowing, shoulder shrug, and tongue movement correspond to cranial nerves VIII through XII. The other ranges cover smell and vision, eye movement, or trigeminal and facial function instead."
  },
  {
    "id": 205,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "During motor system examination, muscle bulk, tone, and strength are assessed to detect which type of abnormality?",
    "options": {
      "A": "Muscle wasting, spasticity or flaccidity, and weakness patterns",
      "B": "Deep tendon reflex grading and pathological reflex responses",
      "C": "Two-point discrimination and vibration sense thresholds",
      "D": "Cerebellar coordination during rapid alternating movements"
    },
    "answer": "A",
    "explanation": "Bulk, tone, and strength testing evaluates wasting, spasticity or flaccidity, and weakness. Reflex grading, sensory discrimination, and cerebellar coordination are separate components of the exam."
  },
  {
    "id": 206,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A patient shows increased tone, hyperreflexia, and a positive Babinski sign. This pattern points toward which lesion type?",
    "options": {
      "A": "A central, upper motor neuron lesion",
      "B": "A peripheral, lower motor neuron lesion",
      "C": "A neuromuscular junction disorder such as myasthenia",
      "D": "A primary muscle disease such as myopathy"
    },
    "answer": "A",
    "explanation": "Increased tone, hyperreflexia, and Babinski's sign are hallmark upper motor neuron findings from a central lesion. Lower motor neuron, neuromuscular junction, and myopathic processes typically produce decreased tone and reflexes."
  },
  {
    "id": 207,
    "chapter": 21,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which finding is most characteristic of a peripheral rather than a central neurological lesion?",
    "options": {
      "A": "Decreased tone with diminished or absent deep tendon reflexes",
      "B": "Increased tone with brisk, hyperactive deep tendon reflexes",
      "C": "A positive Babinski sign with upgoing great toe",
      "D": "Spasticity that increases with rapid passive movement"
    },
    "answer": "A",
    "explanation": "Peripheral or lower motor neuron lesions typically cause decreased tone and diminished reflexes. The other findings, increased tone, a positive Babinski sign, and spasticity, all reflect central lesions."
  },
  {
    "id": 208,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Testing a patient's ability to feel a light touch, pinprick, and temperature evaluates which sensory function?",
    "options": {
      "A": "Primary sensory modalities of the peripheral nervous system",
      "B": "Deep tendon reflex arcs at the spinal cord level",
      "C": "Cerebellar coordination during rapid alternating movements",
      "D": "Cranial nerve function governing facial sensation only"
    },
    "answer": "A",
    "explanation": "Light touch, pinprick, and temperature are core primary sensory modalities tested in the sensory examination. Reflexes, cerebellar function, and cranial nerve testing are distinct exam components."
  },
  {
    "id": 209,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A patient reports numbness in a band-like strip across the chest. This finding is best correlated using which mapping tool?",
    "options": {
      "A": "A dermatome map showing spinal nerve sensory distribution",
      "B": "A cranial nerve chart showing facial sensory branches",
      "C": "A muscle bulk chart showing peripheral nerve territories",
      "D": "A reflex arc diagram showing tendon innervation levels"
    },
    "answer": "A",
    "explanation": "Dermatome maps correlate sensory loss patterns with specific spinal nerve levels, which is ideal for band-like numbness. Cranial nerve charts, muscle bulk charts, and reflex diagrams do not map cutaneous sensory territory."
  },
  {
    "id": 210,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "When grading a deep tendon reflex, a brisk response with a single beat of clonus would be recorded as which grade?",
    "options": {
      "A": "3+, indicating a brisker than average response",
      "B": "0, indicating no response was elicited at all",
      "C": "1+, indicating a diminished or hypoactive response",
      "D": "2+, indicating a normal average response"
    },
    "answer": "A",
    "explanation": "A brisk reflex with a beat of clonus is graded 3+, above the normal average. Grades of 0 or 1+ describe absent or diminished responses, and 2+ describes a normal response."
  },
  {
    "id": 211,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Stroking the lateral sole of the foot and observing the great toe extend upward with fanning of the other toes indicates what?",
    "options": {
      "A": "A positive Babinski sign, a pathological reflex in adults",
      "B": "A normal plantar reflex expected in healthy adults",
      "C": "A normal deep tendon reflex of the ankle",
      "D": "A normal cerebellar response to rapid stimulation"
    },
    "answer": "A",
    "explanation": "Toe extension with fanning on plantar stimulation is a positive Babinski sign, which is pathological in adults and suggests an upper motor neuron lesion. It is not a normal plantar or tendon reflex."
  },
  {
    "id": 212,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Asking a patient to rapidly alternate touching the palm with the front and back of the hand tests which function?",
    "options": {
      "A": "Cerebellar coordination through rapid alternating movements",
      "B": "Primary sensory modality discrimination of the hand",
      "C": "Deep tendon reflex grading at the elbow",
      "D": "Cranial nerve VII function of facial muscles"
    },
    "answer": "A",
    "explanation": "This rapid alternating movement task, dysdiadochokinesia testing, evaluates cerebellar coordination. It does not assess sensory discrimination, tendon reflexes, or facial nerve function."
  },
  {
    "id": 213,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A patient sways and loses balance only when their eyes are closed during the Romberg test. What does this suggest?",
    "options": {
      "A": "A proprioceptive or vestibular deficit rather than a cerebellar one",
      "B": "A cerebellar lesion causing ataxia regardless of eye position",
      "C": "A normal finding expected in all healthy adult patients",
      "D": "A cranial nerve VIII lesion affecting hearing only"
    },
    "answer": "A",
    "explanation": "A positive Romberg sign, swaying with eyes closed but not open, points to a proprioceptive or vestibular problem rather than cerebellar disease, which causes imbalance with eyes open too."
  },
  {
    "id": 214,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Which gait pattern is most classically associated with cerebellar dysfunction?",
    "options": {
      "A": "A wide-based, staggering, uncoordinated ataxic gait",
      "B": "A shuffling gait with reduced arm swing",
      "C": "A scissoring gait with crossed, stiff-legged steps",
      "D": "A steppage gait with exaggerated hip and knee lift"
    },
    "answer": "A",
    "explanation": "Cerebellar dysfunction classically produces a wide-based, staggering ataxic gait. Shuffling, scissoring, and steppage gaits are more typical of parkinsonian, spastic, and foot drop conditions respectively."
  },
  {
    "id": 215,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "A patient presents with sudden facial droop, arm weakness, and slurred speech. What should this presentation prompt the nurse to recognize?",
    "options": {
      "A": "Possible acute stroke requiring urgent time-sensitive assessment",
      "B": "A benign peripheral neuropathy needing routine outpatient follow-up",
      "C": "A normal variant of aging requiring no further action",
      "D": "A musculoskeletal strain best managed with rest and ice"
    },
    "answer": "A",
    "explanation": "Facial droop, arm weakness, and slurred speech are classic FAST stroke signs requiring urgent recognition and time-sensitive intervention. The other options minimize a true neurological emergency."
  },
  {
    "id": 216,
    "chapter": 22,
    "domain": "Regional Examination: Abdominal, Musculoskeletal & Neurological",
    "question": "Loss of vibration sense and proprioception with preserved pain and temperature sensation suggests involvement of which pathway?",
    "options": {
      "A": "The dorsal column pathway rather than the spinothalamic tract",
      "B": "The spinothalamic tract rather than the dorsal column pathway",
      "C": "The corticospinal tract governing voluntary motor movement",
      "D": "The cerebellar peduncles governing coordination and balance"
    },
    "answer": "A",
    "explanation": "Vibration and proprioception travel in the dorsal columns, while pain and temperature travel in the spinothalamic tract; selective loss points to a dorsal column problem. The motor and cerebellar tracts are unrelated to this sensory pattern."
  },
  {
    "id": 217,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Before beginning a genital and rectal examination, what is the priority nursing action regarding consent?",
    "options": {
      "A": "Explain the exam clearly and obtain explicit verbal consent first",
      "B": "Proceed directly to draping since consent was implied at booking",
      "C": "Ask a family member to consent on the patient's behalf",
      "D": "Skip consent discussion if the patient appears comfortable already"
    },
    "answer": "A",
    "explanation": "Trauma-informed, culturally safe practice requires explaining the exam and obtaining explicit consent before proceeding. Implied consent, family consent, and skipping the discussion all fail this standard."
  },
  {
    "id": 218,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "What is the primary purpose of proper draping during a male genital examination?",
    "options": {
      "A": "Preserve the patient's dignity while exposing only the area examined",
      "B": "Speed up the examination by removing all coverings at once",
      "C": "Prevent the nurse from needing to explain each exam step",
      "D": "Eliminate the need for a chaperone during sensitive examinations"
    },
    "answer": "A",
    "explanation": "Draping exposes only the area being examined at any given time, preserving patient dignity. It does not replace explanation, eliminate chaperone considerations, or serve efficiency alone."
  },
  {
    "id": 219,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "On palpation of the scrotal contents, a smooth, cystic mass separate from the testicle that transilluminates suggests what?",
    "options": {
      "A": "A hydrocele, a fluid collection within the tunica vaginalis",
      "B": "A varicocele, a collection of dilated spermatic veins",
      "C": "A firm irregular testicular mass concerning for malignancy",
      "D": "Epididymitis, an inflamed and tender epididymis"
    },
    "answer": "A",
    "explanation": "A smooth, transilluminating cystic mass is characteristic of a hydrocele. A varicocele feels like a soft bag of worms, a malignant mass feels firm and irregular, and epididymitis presents with tenderness."
  },
  {
    "id": 220,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "When teaching testicular self-examination, which instruction is most appropriate?",
    "options": {
      "A": "Examine each testicle monthly, feeling for lumps or size changes",
      "B": "Examine only if pain develops, since routine checks are unnecessary",
      "C": "Perform the exam yearly during an annual physical only",
      "D": "Squeeze firmly to check for masses deep within the testicle"
    },
    "answer": "A",
    "explanation": "Monthly self-examination checking for lumps or changes in size is the standard teaching point. Waiting for pain, annual-only checks, and firm squeezing are inappropriate or unnecessary techniques."
  },
  {
    "id": 221,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which patient position is most commonly used for the digital rectal examination?",
    "options": {
      "A": "Left lateral decubitus with knees drawn toward the chest",
      "B": "Supine with legs extended flat on the examination table",
      "C": "Prone with arms tucked beneath the torso",
      "D": "High Fowler's position with the head elevated upright"
    },
    "answer": "A",
    "explanation": "The left lateral decubitus position with knees drawn up is the most common position for digital rectal examination. Supine, prone, and high Fowler's positions are not standard for this exam."
  },
  {
    "id": 222,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "During a digital rectal examination, the nurse palpates a prostate gland that feels smooth, symmetric, and slightly elastic. This finding is best described as what?",
    "options": {
      "A": "A normal prostate examination finding",
      "B": "A finding consistent with prostate malignancy",
      "C": "A finding consistent with acute prostatitis",
      "D": "An enlarged prostate requiring urgent referral"
    },
    "answer": "A",
    "explanation": "A smooth, symmetric, slightly elastic gland is the expected normal finding. Malignancy typically feels hard and irregular, prostatitis presents with tenderness and warmth, and neither describes this benign finding."
  },
  {
    "id": 223,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "In Canada, prostate screening decisions for asymptomatic patients are generally approached using which framework?",
    "options": {
      "A": "Shared decision-making weighing individual risks and benefits",
      "B": "Mandatory annual screening for all patients over age forty",
      "C": "Universal screening required before any primary care visit",
      "D": "Screening only performed after symptoms have already developed"
    },
    "answer": "A",
    "explanation": "Canadian guidance favours shared decision-making about screening rather than mandatory universal testing. Screening is not required for all visits, nor is it withheld until symptoms appear."
  },
  {
    "id": 224,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which documentation approach best reflects culturally safe care after a male genital examination?",
    "options": {
      "A": "Objective findings plus notes on communication and comfort measures used",
      "B": "Only the objective findings, omitting any communication details",
      "C": "A general statement that the exam was completed without issue",
      "D": "Documentation written entirely in clinical shorthand only"
    },
    "answer": "A",
    "explanation": "Culturally safe documentation includes objective findings alongside how consent and comfort were addressed. Omitting communication details or using vague or shorthand-only notes does not reflect this standard."
  },
  {
    "id": 225,
    "chapter": 23,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A patient becomes visibly anxious when the rectal exam is mentioned. What is the most trauma-informed next step?",
    "options": {
      "A": "Pause, explore concerns, and offer to proceed only with clear consent",
      "B": "Proceed quickly so the uncomfortable moment ends sooner",
      "C": "Reassure the patient the exam is routine and continue immediately",
      "D": "Document the anxiety and complete the exam as originally planned"
    },
    "answer": "A",
    "explanation": "Trauma-informed care means pausing to explore concerns and confirming ongoing consent before proceeding. Rushing through, dismissing the anxiety, or proceeding regardless does not respect patient autonomy."
  },
  {
    "id": 226,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Before a pelvic examination, what best exemplifies trauma-informed communication?",
    "options": {
      "A": "Explaining each step before it happens and checking in throughout",
      "B": "Completing the exam quickly to minimize the patient's discomfort",
      "C": "Assuming consent was given when the appointment was scheduled",
      "D": "Explaining the exam only after it has been completed"
    },
    "answer": "A",
    "explanation": "Trauma-informed care involves explaining each step beforehand and checking in during the exam. Assuming consent, explaining afterward, or prioritizing speed over communication does not meet this standard."
  },
  {
    "id": 227,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which patient position is standard for the pelvic examination?",
    "options": {
      "A": "Lithotomy position with feet in stirrups and hips at the table edge",
      "B": "Prone position with a pillow supporting the pelvis",
      "C": "Left lateral decubitus position with knees drawn to the chest",
      "D": "Supine position with legs fully extended together"
    },
    "answer": "A",
    "explanation": "The lithotomy position with feet in stirrups is standard for pelvic examinations. The other positions are used for different exams, such as rectal or general abdominal assessment."
  },
  {
    "id": 228,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "During speculum insertion, the blades should initially be angled in which direction to avoid discomfort?",
    "options": {
      "A": "Obliquely at about a forty-five degree angle",
      "B": "Directly upward toward the anterior vaginal wall",
      "C": "Directly downward toward the posterior vaginal wall only",
      "D": "Perpendicular to the table with blades fully open"
    },
    "answer": "A",
    "explanation": "Initial oblique insertion at roughly forty-five degrees follows the natural angle of the vaginal canal and reduces discomfort. Directly upward, straight down, or fully open insertion increases pressure on sensitive structures."
  },
  {
    "id": 229,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "In Canada, current cervical screening guidelines increasingly emphasize which primary testing approach for eligible patients?",
    "options": {
      "A": "Primary HPV testing at extended screening intervals",
      "B": "Annual Pap testing for every patient regardless of age",
      "C": "Screening only after symptoms of abnormal bleeding appear",
      "D": "Colposcopy as the first-line screening test for all patients"
    },
    "answer": "A",
    "explanation": "Canadian cervical screening is shifting toward primary HPV testing with longer intervals between screens. Annual Pap testing for everyone, symptom-triggered screening, and routine colposcopy are not the current primary approach."
  },
  {
    "id": 230,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "During the bimanual examination, the nurse practitioner assesses the uterus for which characteristics?",
    "options": {
      "A": "Size, shape, consistency, and mobility",
      "B": "Colour, temperature, and surface texture only",
      "C": "Vibration sense and two-point discrimination",
      "D": "Deep tendon reflex response and tone"
    },
    "answer": "A",
    "explanation": "Bimanual examination evaluates uterine size, shape, consistency, and mobility through palpation. Colour and temperature are not palpable internally, and reflex or vibration testing are unrelated neurological assessments."
  },
  {
    "id": 231,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "When caring for a transmasculine patient requiring a pelvic examination, which approach best reflects gender-affirming care?",
    "options": {
      "A": "Using the patient's correct name, pronouns, and anatomical terms they prefer",
      "B": "Using terminology from the patient's legal documents regardless of preference",
      "C": "Avoiding discussion of anatomy to prevent an awkward conversation",
      "D": "Assuming the same approach used for all patients is sufficient"
    },
    "answer": "A",
    "explanation": "Gender-affirming care means using the patient's correct name, pronouns, and preferred anatomical language. Relying on legal documents, avoiding anatomy discussion, or a one-size-fits-all approach can cause harm."
  },
  {
    "id": 232,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "After a pelvic examination, which aftercare action is most appropriate?",
    "options": {
      "A": "Offer tissues, privacy to dress, and a summary of findings",
      "B": "Leave the room immediately without further explanation",
      "C": "Discuss findings only at a separate future appointment",
      "D": "Document findings without any verbal summary for the patient"
    },
    "answer": "A",
    "explanation": "Appropriate aftercare includes offering privacy, comfort measures, and a clear summary of findings. Leaving abruptly, delaying discussion, or omitting verbal communication does not support patient-centred aftercare."
  },
  {
    "id": 233,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Inspection of the external genitalia prior to speculum insertion primarily allows the nurse to assess for which finding?",
    "options": {
      "A": "Lesions, discharge, or signs of irritation on the vulva",
      "B": "Uterine size and adnexal tenderness on palpation",
      "C": "Cervical os shape as seen through the speculum",
      "D": "Ovarian mobility assessed through bimanual technique"
    },
    "answer": "A",
    "explanation": "External inspection identifies visible lesions, discharge, or irritation before any instrumentation. Uterine size, cervical os shape, and ovarian mobility require palpation or speculum visualization, not external inspection."
  },
  {
    "id": 234,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A patient requests that a support person remain in the room throughout the pelvic examination. What is the best response?",
    "options": {
      "A": "Accommodate the request as part of patient-centred, trauma-informed care",
      "B": "Deny the request since only clinical staff may be present",
      "C": "Allow it only if the support person signs a waiver first",
      "D": "Postpone the exam until the patient agrees to be alone"
    },
    "answer": "A",
    "explanation": "Accommodating a support person, when feasible, reflects patient-centred and trauma-informed practice. Denying, requiring waivers, or postponing the exam are unnecessary barriers to patient-centred care."
  },
  {
    "id": 235,
    "chapter": 24,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which best next action applies if the cervix cannot be visualized due to speculum angle during insertion?",
    "options": {
      "A": "Reposition the speculum angle and readjust before proceeding further",
      "B": "Remove the speculum and immediately end the examination entirely",
      "C": "Apply firm downward pressure regardless of patient comfort",
      "D": "Continue without visualizing the cervix and collect samples blindly"
    },
    "answer": "A",
    "explanation": "Repositioning the speculum angle is the appropriate next step to achieve visualization. Ending the exam, forcing pressure, or sampling without visualization are unsafe or unnecessary responses."
  },
  {
    "id": 236,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A nurse is measuring fundal height on a patient at 28 weeks gestation. Which technique is correct according to McDonald's rule?",
    "options": {
      "A": "Measure from the pubic symphysis to the top of the fundus in centimetres",
      "B": "Measure from the umbilicus to the xiphoid process in centimetres",
      "C": "Measure the abdominal girth at the level of the umbilicus",
      "D": "Measure from the iliac crest to the fundus using a Doppler"
    },
    "answer": "A",
    "explanation": "McDonald's rule measures from the symphysis pubis to the fundal height in centimetres, which correlates roughly with gestational weeks between 20-34 weeks. The other options describe incorrect landmarks or unrelated measurements."
  },
  {
    "id": 237,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "At what gestational age should fetal heart tones typically first be auscultated using a handheld Doppler device?",
    "options": {
      "A": "10 to 12 weeks gestation",
      "B": "4 to 6 weeks gestation",
      "C": "24 to 26 weeks gestation",
      "D": "32 to 34 weeks gestation"
    },
    "answer": "A",
    "explanation": "Doppler devices can typically detect fetal heart tones by 10 to 12 weeks gestation, while a fetoscope is not reliable until later. The other timeframes are either too early to detect any signal or unnecessarily late."
  },
  {
    "id": 238,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A pregnant patient at 32 weeks presents with a blood pressure of 150/95 mmHg and new-onset proteinuria. What condition is most consistent with these findings?",
    "options": {
      "A": "Preeclampsia",
      "B": "Gestational diabetes",
      "C": "Physiologic anemia of pregnancy",
      "D": "Supine hypotensive syndrome"
    },
    "answer": "A",
    "explanation": "New hypertension after 20 weeks plus proteinuria is the classic diagnostic pattern for preeclampsia. Gestational diabetes, physiologic anemia, and supine hypotension do not present with hypertension and proteinuria together."
  },
  {
    "id": 239,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A patient reports significantly decreased fetal movement compared to her usual pattern at 34 weeks. What is the nurse's best next action?",
    "options": {
      "A": "Refer promptly for fetal heart rate monitoring and further assessment",
      "B": "Reassure the patient that movement naturally decreases near term",
      "C": "Advise the patient to increase caffeine intake and recheck tomorrow",
      "D": "Schedule a routine follow-up appointment in two weeks"
    },
    "answer": "A",
    "explanation": "Decreased fetal movement is a danger sign requiring prompt evaluation with fetal heart rate monitoring to rule out compromise. Reassurance, caffeine advice, and delayed follow-up all inappropriately dismiss a potential warning sign."
  },
  {
    "id": 240,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Painless bright red vaginal bleeding in the third trimester is most characteristic of which cause of antepartum hemorrhage?",
    "options": {
      "A": "Placenta previa",
      "B": "Placental abruption",
      "C": "Preterm labour contractions",
      "D": "Cervical polyp irritation"
    },
    "answer": "A",
    "explanation": "Placenta previa classically presents with painless bright red bleeding because the low-lying placenta separates without uterine contraction. Placental abruption typically causes painful bleeding with a rigid abdomen, unlike the other distractors."
  },
  {
    "id": 241,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which physiological adaptation is expected during a normal pregnancy and should be documented during systematic assessment?",
    "options": {
      "A": "Increased blood volume and physiologic anemia",
      "B": "Decreased cardiac output throughout gestation",
      "C": "Reduced tidal volume and chronic hypoxia",
      "D": "Decreased glomerular filtration rate persistently"
    },
    "answer": "A",
    "explanation": "Blood volume expands substantially in pregnancy, causing a dilutional physiologic anemia, which is a normal finding. Cardiac output actually increases, and renal filtration rate rises rather than falls."
  },
  {
    "id": 242,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "When adapting a health history for an antepartum patient, what does the GTPAL system summarize?",
    "options": {
      "A": "Gravida, term births, preterm births, abortions, and living children",
      "B": "Growth, temperature, pulse, activity level, and lifestyle habits",
      "C": "Gestation, trimester, placenta position, amniotic fluid, and labour type",
      "D": "General health, tobacco use, prenatal vitamins, allergies, and lab results"
    },
    "answer": "A",
    "explanation": "GTPAL is an obstetric shorthand summarizing gravida, term, preterm, abortion, and living children counts. The other options invent unrelated meanings for the same letters."
  },
  {
    "id": 243,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "During the systematic physical assessment, what is the primary purpose of performing Leopold maneuvers?",
    "options": {
      "A": "To determine fetal lie, presentation, and position through abdominal palpation",
      "B": "To measure maternal blood pressure trends across trimesters",
      "C": "To auscultate maternal heart sounds for murmurs",
      "D": "To assess cervical dilation during the third trimester"
    },
    "answer": "A",
    "explanation": "Leopold maneuvers use systematic abdominal palpation to identify fetal lie, presentation, and position. Blood pressure trends, maternal heart auscultation, and cervical dilation are unrelated assessment techniques."
  },
  {
    "id": 244,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A patient at 36 weeks reports a severe headache and visual disturbances. Which danger sign should this raise concern for?",
    "options": {
      "A": "Preeclampsia progressing toward eclampsia",
      "B": "Normal third-trimester fatigue and dehydration",
      "C": "Round ligament pain from uterine growth",
      "D": "Braxton Hicks contraction discomfort"
    },
    "answer": "A",
    "explanation": "Severe headache with visual disturbances are classic warning symptoms of worsening preeclampsia that can precede eclampsia. The remaining options describe benign, unrelated third-trimester complaints."
  },
  {
    "id": 245,
    "chapter": 25,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "When building a complete antepartum assessment encounter, which combination best reflects a comprehensive approach?",
    "options": {
      "A": "History, vital signs, fundal height, fetal heart tones, and danger sign review",
      "B": "History only, deferring physical assessment to the next scheduled visit",
      "C": "Fetal heart tones only, since this best predicts overall fetal wellbeing",
      "D": "Vital signs only, since fundal height is optional after 20 weeks"
    },
    "answer": "A",
    "explanation": "A thorough antepartum encounter integrates history, vitals, fundal height, fetal heart tones, and screening for danger signs. The other options each omit essential components of a complete assessment."
  },
  {
    "id": 246,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "What is the recommended best practice for intake forms in an inclusive assessment setting?",
    "options": {
      "A": "Include fields for chosen name and pronouns alongside legal name",
      "B": "Include only legal name fields to maintain consistent records",
      "C": "Ask patients to select gender from male or female only",
      "D": "Defer pronoun questions until the physical examination begins"
    },
    "answer": "A",
    "explanation": "Inclusive intake forms collect chosen name and pronouns alongside legal name to affirm patient identity while maintaining accurate records. Restricting to legal name only or binary gender options fails to reflect inclusive practice."
  },
  {
    "id": 247,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "A transgender patient corrects the nurse after being addressed with an incorrect pronoun. What is the nurse's best next action?",
    "options": {
      "A": "Apologize briefly, use the correct pronoun, and continue the encounter",
      "B": "Explain that pronoun mistakes are unavoidable and move on quickly",
      "C": "Avoid using any pronouns for the remainder of the encounter",
      "D": "Ask the patient to repeat their pronoun preference multiple times"
    },
    "answer": "A",
    "explanation": "A brief apology followed by correct use of the pronoun models respectful, low-friction correction without dwelling on the error. Minimizing the mistake, avoiding pronouns entirely, or repeated questioning all create unnecessary discomfort."
  },
  {
    "id": 248,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "What does the concept of an 'organ inventory' refer to when adapting physical examination for gender-diverse patients?",
    "options": {
      "A": "Documenting which anatomical structures a patient currently has, regardless of gender identity",
      "B": "Recording a patient's surgical history only for insurance billing purposes",
      "C": "Listing organs removed prior to any gender-affirming hormone therapy",
      "D": "A checklist used exclusively during preoperative surgical clearance visits"
    },
    "answer": "A",
    "explanation": "An organ inventory documents which anatomical structures are present so relevant screening and examinations are not missed or wrongly assumed based on gender identity. The other options narrow this concept to unrelated administrative or surgical contexts."
  },
  {
    "id": 249,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which factor is commonly identified as a barrier to care for 2SLGBTQI+ populations in the Canadian healthcare system?",
    "options": {
      "A": "Prior negative experiences leading to avoidance of future care",
      "B": "Excessive availability of gender-affirming specialists nationwide",
      "C": "Overly detailed intake forms causing appointment delays",
      "D": "Mandatory reporting laws applying equally to all patients"
    },
    "answer": "A",
    "explanation": "Documented barriers include prior discrimination or negative experiences that cause patients to delay or avoid seeking care. The other options describe conditions that are not established barriers within this population."
  },
  {
    "id": 250,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "The minority stress model helps explain which health outcome pattern among 2SLGBTQI+ patients?",
    "options": {
      "A": "Elevated rates of chronic stress-related conditions from stigma exposure",
      "B": "Uniformly lower rates of chronic disease across the population",
      "C": "Reduced need for preventive screening compared to other groups",
      "D": "Equal health outcomes regardless of social or systemic stigma"
    },
    "answer": "A",
    "explanation": "The minority stress model links chronic exposure to stigma and discrimination with elevated rates of stress-related physical and mental health conditions. The other options contradict the documented disparities this model describes."
  },
  {
    "id": 251,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "When performing a chest examination on a transgender man who has not had chest surgery, what is an appropriate adaptation?",
    "options": {
      "A": "Use clinically accurate, gender-neutral language while explaining the exam",
      "B": "Avoid the exam entirely regardless of documented risk factors",
      "C": "Use only feminine anatomical terminology throughout the encounter",
      "D": "Perform the exam without any explanation to save time"
    },
    "answer": "A",
    "explanation": "Using accurate, gender-neutral language while clearly explaining the exam respects identity while ensuring necessary screening occurs. Skipping the exam or using misgendering terminology both compromise care quality and patient dignity."
  },
  {
    "id": 252,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "During history-taking, which open-ended approach best reflects inclusive practice regarding relationships and partners?",
    "options": {
      "A": "Asking 'Do you have a partner or partners?' without assuming gender",
      "B": "Asking 'Do you have a husband?' to streamline the interview",
      "C": "Asking about partners only if the patient appears to be married",
      "D": "Skipping relationship questions unless directly relevant to the visit"
    },
    "answer": "A",
    "explanation": "Open-ended, gender-neutral questions about partners avoid heteronormative assumptions and allow patients to self-disclose accurately. Assuming a specific partner gender or skipping the topic can miss relevant health information."
  },
  {
    "id": 253,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Which environmental element contributes most to creating a psychologically safe assessment space?",
    "options": {
      "A": "Visible inclusive signage and confidentiality of sensitive information",
      "B": "Strict adherence to a fixed, unmodifiable intake script",
      "C": "Requiring a chaperone present for every single encounter",
      "D": "Minimizing eye contact to reduce perceived clinical scrutiny"
    },
    "answer": "A",
    "explanation": "Visible inclusive signage combined with protected confidentiality signals safety and welcome to 2SLGBTQI+ patients. Rigid scripting, mandatory chaperones, and reduced eye contact do not specifically address psychological safety."
  },
  {
    "id": 254,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Cervical screening guidance for a transgender man with a cervix should generally follow which principle?",
    "options": {
      "A": "Screening intervals based on anatomy present, not gender identity",
      "B": "Screening is unnecessary once testosterone therapy has begun",
      "C": "Screening should follow guidelines for cisgender men only",
      "D": "Screening should be deferred indefinitely to avoid dysphoria"
    },
    "answer": "A",
    "explanation": "Screening recommendations are based on the anatomy present, so a transgender man with a cervix still requires cervical screening per standard intervals. Testosterone therapy, male-specific guidelines, or indefinite deferral do not eliminate this anatomical screening need."
  },
  {
    "id": 255,
    "chapter": 26,
    "domain": "Genitourinary, Breast & Reproductive",
    "question": "Bringing inclusive assessment principles together in practice, which action best demonstrates cultural safety?",
    "options": {
      "A": "Adapting communication and exam approach to the individual patient's needs",
      "B": "Applying an identical standardized script to every patient encounter",
      "C": "Focusing only on physical findings while avoiding social history",
      "D": "Deferring all sensitive questions to a specialist referral instead"
    },
    "answer": "A",
    "explanation": "Cultural safety involves tailoring communication and examination approach to each patient's identity and needs rather than a one-size-fits-all script. Ignoring social history or deferring all sensitive topics undermines comprehensive, patient-centred care."
  },
  {
    "id": 256,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A newborn is being assessed immediately after birth. Which two time points are standard for APGAR scoring?",
    "options": {
      "A": "1 minute and 5 minutes after birth",
      "B": "Immediately at birth and 30 minutes later",
      "C": "5 minutes and 30 minutes after birth",
      "D": "10 minutes and 20 minutes after birth"
    },
    "answer": "A",
    "explanation": "APGAR scores are standardly assessed at 1 minute and 5 minutes after birth to evaluate immediate transition and response to resuscitation. The other time combinations are not the standard protocol."
  },
  {
    "id": 257,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which finding on gestational age assessment using the Ballard score suggests a more preterm infant?",
    "options": {
      "A": "Thin, translucent skin with minimal sole creases",
      "B": "Thick skin with extensive cracking and abundant sole creases",
      "C": "Fully descended testes with a rugated scrotum",
      "D": "Firm ear cartilage that recoils promptly when folded"
    },
    "answer": "A",
    "explanation": "Thin, translucent skin and minimal sole creases are physical maturity signs associated with a more preterm infant. The other findings indicate greater physical maturity typical of a term infant."
  },
  {
    "id": 258,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "During primitive reflex testing, a loud noise causes the newborn to extend the arms and legs before drawing them back in. Which reflex is being demonstrated?",
    "options": {
      "A": "Moro reflex",
      "B": "Rooting reflex",
      "C": "Babinski reflex",
      "D": "Tonic neck reflex"
    },
    "answer": "A",
    "explanation": "The Moro reflex is elicited by a startling stimulus and presents as symmetric extension followed by flexion of the extremities. Rooting, Babinski, and tonic neck reflexes are triggered by different stimuli and produce distinct movement patterns."
  },
  {
    "id": 259,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which growth chart standard is recommended for plotting growth measurements of Canadian infants?",
    "options": {
      "A": "WHO growth charts adapted for Canadian use",
      "B": "CDC growth charts developed for the United States",
      "C": "Local hospital-specific unpublished growth norms",
      "D": "Adult BMI charts applied proportionally to infants"
    },
    "answer": "A",
    "explanation": "The WHO growth charts, adapted for Canadian practice, are the recommended standard for plotting infant growth measurements. CDC charts, unpublished local norms, and adult BMI charts are not the appropriate Canadian pediatric standard."
  },
  {
    "id": 260,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "On head-to-toe examination, a soft, diamond-shaped depression is palpated at the top of a newborn's skull. What is this normal finding called?",
    "options": {
      "A": "Anterior fontanelle",
      "B": "Cephalohematoma",
      "C": "Caput succedaneum",
      "D": "Posterior fontanelle"
    },
    "answer": "A",
    "explanation": "The anterior fontanelle is the larger, diamond-shaped soft spot located at the top of the skull and is a normal finding. Cephalohematoma and caput succedaneum are scalp swellings, and the posterior fontanelle is smaller and triangular."
  },
  {
    "id": 261,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "The Rourke Baby Record is used in Canadian practice primarily to guide which aspect of infant care?",
    "options": {
      "A": "The schedule and content of well-child visits and developmental screening",
      "B": "The dosing schedule for neonatal resuscitation medications",
      "C": "The technique for performing the initial APGAR assessment",
      "D": "The criteria for diagnosing congenital cardiac anomalies"
    },
    "answer": "A",
    "explanation": "The Rourke Baby Record guides the timing and content of well-child visits, including developmental screening, growth, and immunization tracking. It is not a resuscitation, APGAR, or cardiac diagnostic tool."
  },
  {
    "id": 262,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "By approximately what age does the Moro reflex normally disappear in a developing infant?",
    "options": {
      "A": "4 to 6 months of age",
      "B": "1 to 2 weeks of age",
      "C": "12 to 15 months of age",
      "D": "18 to 24 months of age"
    },
    "answer": "A",
    "explanation": "The Moro reflex typically integrates and disappears by about 4 to 6 months of age as the nervous system matures. Persistence beyond this window, or disappearance far earlier or later than stated, would be atypical."
  },
  {
    "id": 263,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Immediately after birth, what is the priority action in the initial assessment of a healthy term newborn?",
    "options": {
      "A": "Dry the infant thoroughly and maintain thermoregulation",
      "B": "Delay all contact until the full head-to-toe exam is complete",
      "C": "Immediately measure gestational age using the Ballard tool",
      "D": "Postpone airway assessment until vital signs are obtained"
    },
    "answer": "A",
    "explanation": "Drying and maintaining warmth is a priority immediate action to prevent heat loss and support transition at birth. Delaying contact, prioritizing gestational scoring, or postponing airway assessment would compromise immediate newborn stabilization."
  },
  {
    "id": 264,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A nurse strokes the newborn's cheek near the mouth, and the infant turns toward the stimulus and opens the mouth. Which reflex is this?",
    "options": {
      "A": "Rooting reflex",
      "B": "Palmar grasp reflex",
      "C": "Stepping reflex",
      "D": "Babinski reflex"
    },
    "answer": "A",
    "explanation": "The rooting reflex causes the infant to turn toward a cheek stimulus and open the mouth, supporting feeding readiness. Palmar grasp, stepping, and Babinski reflexes are elicited by different stimuli on the hands or feet."
  },
  {
    "id": 265,
    "chapter": 27,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which developmental screening approach is emphasized within the well-child examination schedule for infants in Canada?",
    "options": {
      "A": "Routine milestone and growth screening at scheduled well-child visits",
      "B": "Screening only when a caregiver specifically requests an evaluation",
      "C": "A single comprehensive screen performed only at the 12-month visit",
      "D": "Screening deferred entirely until the child enters school"
    },
    "answer": "A",
    "explanation": "Routine developmental and growth screening is built into each scheduled well-child visit to catch concerns early. Waiting for caregiver request, a single late screen, or deferral until school age would delay important early identification."
  },
  {
    "id": 266,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "In the HEADSSS framework for adolescent assessment, what does the first 'S' typically represent?",
    "options": {
      "A": "Sexuality",
      "B": "School attendance",
      "C": "Social media use",
      "D": "Sleep patterns"
    },
    "answer": "A",
    "explanation": "In the HEADSSS framework, the components include Home, Education/Employment, Activities, Drugs, Sexuality, Suicide/depression, and Safety, with Sexuality as the first S. School attendance falls under Education, and social media or sleep are not distinct HEADSSS categories."
  },
  {
    "id": 267,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "An adolescent asks whether their conversation with the nurse will be shared with a parent. What is the best explanation of confidentiality limits?",
    "options": {
      "A": "Confidentiality is maintained except when there is risk of serious harm",
      "B": "Confidentiality is absolute and nothing is ever disclosed to anyone",
      "C": "All information will automatically be shared with the parent present",
      "D": "Confidentiality only applies to conversations about physical symptoms"
    },
    "answer": "A",
    "explanation": "Adolescent confidentiality is generally maintained but has defined limits, such as risk of serious harm to self or others, which require disclosure. Claiming absolute confidentiality or automatic parental disclosure misrepresents the actual standard of practice."
  },
  {
    "id": 268,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Tanner staging is primarily used to assess which aspect of adolescent development?",
    "options": {
      "A": "The progression of secondary sexual characteristics during puberty",
      "B": "The child's cognitive development and academic performance",
      "C": "The adolescent's emotional regulation and coping strategies",
      "D": "The adolescent's overall vaccination and immunization status"
    },
    "answer": "A",
    "explanation": "Tanner staging systematically assesses the progression of secondary sexual characteristics such as breast, genital, and pubic hair development. Cognitive development, emotional regulation, and immunization status are assessed through entirely different tools."
  },
  {
    "id": 269,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "When examining a toddler, which age-appropriate technique is most effective for reducing distress during the exam?",
    "options": {
      "A": "Performing much of the exam while the child sits on a caregiver's lap",
      "B": "Requiring the toddler to lie flat alone on the exam table throughout",
      "C": "Separating the toddler from the caregiver to reduce distraction",
      "D": "Beginning immediately with the most invasive parts of the exam"
    },
    "answer": "A",
    "explanation": "Allowing a toddler to remain on a caregiver's lap during the exam provides comfort and reduces distress while still permitting assessment. Forced isolation, separation, or starting with invasive components typically increases fear and resistance."
  },
  {
    "id": 270,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A child is not yet walking independently at 18 months of age. How should this finding be interpreted during developmental screening?",
    "options": {
      "A": "A red flag warranting further developmental evaluation",
      "B": "A normal variant requiring no further follow-up at all",
      "C": "An expected finding typical for this exact age group",
      "D": "A sign that should only be addressed after age three"
    },
    "answer": "A",
    "explanation": "Failure to walk independently by 18 months is considered a red flag that warrants further developmental evaluation. Dismissing it as normal or delaying follow-up until much later risks missing a treatable developmental concern."
  },
  {
    "id": 271,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "During examination of a school-age child, which sequencing principle best supports cooperation and trust?",
    "options": {
      "A": "Performing less invasive parts of the exam before more sensitive components",
      "B": "Performing the most sensitive components first to save time overall",
      "C": "Randomizing the order of exam components for every single visit",
      "D": "Explaining nothing about the exam until it has already been completed"
    },
    "answer": "A",
    "explanation": "Sequencing from less invasive to more sensitive components builds trust and cooperation as the encounter progresses. Starting with sensitive areas, randomizing order, or withholding explanation tends to increase anxiety and resistance."
  },
  {
    "id": 272,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Tanner Stage 2 breast development in a female adolescent is best described by which finding?",
    "options": {
      "A": "Breast bud formation with a small mound and areolar widening",
      "B": "Fully mature adult breast contour with recessed areola",
      "C": "Complete absence of any glandular or areolar tissue",
      "D": "Elevation of the areola and papilla as a secondary mound"
    },
    "answer": "A",
    "explanation": "Tanner Stage 2 is characterized by breast bud formation, a small raised mound, and areolar widening, marking the onset of pubertal breast development. Fully mature contour, complete absence of tissue, and areolar secondary mounding describe other stages entirely."
  },
  {
    "id": 273,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Within the Home component of the HEADSSS framework, which line of questioning is most appropriate?",
    "options": {
      "A": "Asking about household relationships, stability, and living situation",
      "B": "Asking exclusively about the adolescent's current grade point average",
      "C": "Asking only about extracurricular sports team participation",
      "D": "Asking about substance use patterns among household members only"
    },
    "answer": "A",
    "explanation": "The Home component explores household relationships, stability, and living circumstances as a foundation for the broader psychosocial assessment. Grades, extracurriculars, and substance use belong to the Education and Drugs categories respectively."
  },
  {
    "id": 274,
    "chapter": 28,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A 12-month-old is not yet pointing to show interest in objects. How should this finding be interpreted during screening for developmental delay?",
    "options": {
      "A": "A red flag warranting further developmental follow-up",
      "B": "An expected finding requiring no additional action",
      "C": "A sign specific only to gross motor delay, not communication",
      "D": "A finding relevant only after the child turns three"
    },
    "answer": "A",
    "explanation": "Absence of pointing to show interest by 12 months is a recognized red flag for communication and social development that warrants further follow-up. Treating it as normal, motor-specific, or deferring until later risks missing an early concern."
  },
  {
    "id": 275,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which finding is most consistent with normal ageing rather than pathology?",
    "options": {
      "A": "Gradual decline in visual accommodation and near vision",
      "B": "Sudden onset of confusion over several hours",
      "C": "New unilateral facial droop with slurred speech",
      "D": "Rapid unintentional weight loss over one month"
    },
    "answer": "A",
    "explanation": "Presbyopia is an expected age-related change, while acute confusion, facial droop, and rapid weight loss all suggest new pathology requiring urgent evaluation."
  },
  {
    "id": 276,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A nurse assesses grip strength, gait speed, and unintentional weight loss. Which concept is being evaluated?",
    "options": {
      "A": "Frailty",
      "B": "Delirium severity",
      "C": "Medication adherence",
      "D": "Nutritional preference"
    },
    "answer": "A",
    "explanation": "Grip strength, gait speed, and weight loss are core physical frailty indicators; the others are assessed through different tools such as delirium screens or diet history."
  },
  {
    "id": 277,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which activity belongs to the Instrumental Activities of Daily Living (IADL) category?",
    "options": {
      "A": "Managing personal finances and paying bills",
      "B": "Bathing independently in the shower",
      "C": "Transferring from bed to a chair",
      "D": "Feeding oneself at mealtime"
    },
    "answer": "A",
    "explanation": "Managing finances is an IADL requiring higher-level cognitive and organizational skill, while bathing, transferring, and feeding are basic ADLs."
  },
  {
    "id": 278,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Why are older adults at higher risk for adverse drug events from polypharmacy?",
    "options": {
      "A": "Reduced renal and hepatic clearance alters drug metabolism",
      "B": "Older adults metabolize most drugs more quickly than younger adults",
      "C": "Prescribers routinely avoid drug interaction checks for seniors",
      "D": "Older adults are legally required to take more medications"
    },
    "answer": "A",
    "explanation": "Age-related decline in renal and hepatic function slows drug clearance, increasing toxicity risk; drugs are not metabolized faster, and the other options are inaccurate."
  },
  {
    "id": 279,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "An older adult with pneumonia presents with new confusion but no fever or cough. This illustrates what concept?",
    "options": {
      "A": "Atypical presentation of acute illness",
      "B": "Classic presentation of pneumonia",
      "C": "Baseline cognitive impairment",
      "D": "Normal age-related respiratory change"
    },
    "answer": "A",
    "explanation": "Older adults often present acute illness atypically, such as confusion instead of fever, which can delay recognition; this is not a classic or baseline presentation."
  },
  {
    "id": 280,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which tool is commonly used at the bedside for brief cognitive screening?",
    "options": {
      "A": "Mini-Mental State Examination",
      "B": "Braden Scale",
      "C": "Glasgow Coma Scale",
      "D": "Morse Fall Scale"
    },
    "answer": "A",
    "explanation": "The Mini-Mental State Examination screens cognitive function; the Braden Scale assesses pressure injury risk, the Glasgow Coma Scale rates consciousness level, and the Morse Fall Scale predicts fall risk."
  },
  {
    "id": 281,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which sign should raise suspicion for elder neglect rather than normal ageing?",
    "options": {
      "A": "Poor hygiene with untreated pressure sores and dehydration",
      "B": "Mild forgetfulness for recent appointment details",
      "C": "Slower reaction time during a timed gait test",
      "D": "Thinning skin that bruises easily with minor bumps"
    },
    "answer": "A",
    "explanation": "Untreated pressure sores, dehydration, and poor hygiene suggest inadequate care and possible neglect, whereas mild forgetfulness, slower reactions, and thin skin are typical ageing changes."
  },
  {
    "id": 282,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which finding on functional assessment would most support a referral for home support services?",
    "options": {
      "A": "Client requires assistance with meal preparation and laundry",
      "B": "Client independently manages all basic and instrumental ADLs",
      "C": "Client reports normal age-related vision changes",
      "D": "Client scores within normal range on cognitive screening"
    },
    "answer": "A",
    "explanation": "Needing assistance with IADLs like meal preparation and laundry indicates a functional deficit warranting support services, unlike full independence or normal screening results."
  },
  {
    "id": 283,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "When bringing an older adult assessment together, which approach best reflects comprehensive geriatric practice?",
    "options": {
      "A": "Integrate physical, cognitive, functional, and social findings holistically",
      "B": "Focus exclusively on the presenting physical complaint",
      "C": "Rely solely on family report without direct patient interview",
      "D": "Assess cognition only if the patient appears confused"
    },
    "answer": "A",
    "explanation": "Comprehensive geriatric assessment integrates multiple domains together, rather than narrowly focusing on one complaint, relying only on family, or screening cognition selectively."
  },
  {
    "id": 284,
    "chapter": 29,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which best describes the purpose of a frailty assessment in older adults?",
    "options": {
      "A": "To identify vulnerability to poor outcomes from minor stressors",
      "B": "To diagnose a specific infectious disease process",
      "C": "To determine eligibility for surgical anesthesia only",
      "D": "To replace the need for a falls risk assessment"
    },
    "answer": "A",
    "explanation": "Frailty assessment identifies increased vulnerability to adverse outcomes from stressors like illness or surgery; it does not diagnose infection or replace falls screening entirely."
  },
  {
    "id": 285,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Why should screening for family violence be incorporated into routine nursing practice?",
    "options": {
      "A": "Many survivors do not disclose unless directly and privately asked",
      "B": "Screening is only legally required in emergency departments",
      "C": "Most disclosures occur spontaneously without prompting",
      "D": "Routine screening is reserved solely for social workers"
    },
    "answer": "A",
    "explanation": "Survivors often will not volunteer information unless asked directly in a private setting, so routine screening by nurses across settings increases detection."
  },
  {
    "id": 286,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "What is the first step in creating a safe environment before screening for intimate partner violence?",
    "options": {
      "A": "Ensure the patient is alone, away from partner or family",
      "B": "Ask screening questions in front of the accompanying partner",
      "C": "Document suspicions in the chart before any conversation",
      "D": "Call security immediately prior to any interview"
    },
    "answer": "A",
    "explanation": "Privacy without the partner or family present is essential for safe disclosure; screening in front of a potential abuser can endanger the patient."
  },
  {
    "id": 287,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which statement reflects best practice when screening for intimate partner violence?",
    "options": {
      "A": "Use direct, nonjudgmental questions in a private setting",
      "B": "Assume disclosure only if visible bruising is present",
      "C": "Ask leading questions that suggest the expected answer",
      "D": "Wait for the patient to bring up the topic first"
    },
    "answer": "A",
    "explanation": "Direct, nonjudgmental questioning in privacy increases disclosure likelihood; waiting passively or requiring visible injury misses many cases of violence."
  },
  {
    "id": 288,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which finding in a young child should prompt further assessment for possible abuse?",
    "options": {
      "A": "Bruising patterns inconsistent with the reported mechanism of injury",
      "B": "A single bruise on the shin consistent with normal play",
      "C": "Mild diaper rash reported by an attentive caregiver",
      "D": "A scraped knee after a reported fall while running"
    },
    "answer": "A",
    "explanation": "Injuries inconsistent with the explanation given raise concern for abuse, unlike common accidental injuries typical of active children."
  },
  {
    "id": 289,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which of the following is a red flag for elder abuse during a home visit?",
    "options": {
      "A": "A caregiver who refuses to leave the room during interviews",
      "B": "An older adult who independently answers all questions",
      "C": "A tidy home environment with adequate food supplies",
      "D": "A caregiver who encourages private time with the nurse"
    },
    "answer": "A",
    "explanation": "A caregiver refusing to allow privacy is a recognized warning sign of possible elder abuse, unlike independence, a well-kept home, or encouraging private conversation."
  },
  {
    "id": 290,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "A patient discloses past abuse during assessment. What is the most trauma-informed initial nursing response?",
    "options": {
      "A": "Listen without judgment and validate the patient's experience",
      "B": "Immediately ask for graphic details of every incident",
      "C": "Express visible shock and disbelief at the disclosure",
      "D": "Redirect the conversation to unrelated physical symptoms"
    },
    "answer": "A",
    "explanation": "A trauma-informed response validates the disclosure and avoids re-traumatization; demanding graphic detail, reacting with shock, or dismissing the topic can harm the patient."
  },
  {
    "id": 291,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Under Canadian provincial legislation, when is a nurse generally obligated to make a mandatory report?",
    "options": {
      "A": "When there is reasonable suspicion of child abuse or neglect",
      "B": "Only when the patient explicitly requests a report be filed",
      "C": "Only after obtaining written consent from the suspected abuser",
      "D": "Never, as all disclosures are protected by strict confidentiality"
    },
    "answer": "A",
    "explanation": "Provincial child welfare legislation requires reporting on reasonable suspicion of abuse or neglect, regardless of patient request or abuser consent."
  },
  {
    "id": 292,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "What is a key component of safety planning with a patient experiencing intimate partner violence?",
    "options": {
      "A": "Identifying a safe place to go and an emergency exit plan",
      "B": "Advising the patient to confront the partner immediately",
      "C": "Insisting the patient leave the relationship that same day",
      "D": "Sharing the disclosure with the partner for mediation"
    },
    "answer": "A",
    "explanation": "Safety planning involves identifying safe locations and exit strategies on the patient's own timeline; confrontation, forced departure, or informing the partner can increase danger."
  },
  {
    "id": 293,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Why is self-care important for nurses who regularly screen for family violence?",
    "options": {
      "A": "Repeated exposure to trauma disclosures can cause vicarious traumatization",
      "B": "Self-care is required only for nurses working in pediatrics",
      "C": "Nurses who screen for violence are exempt from documentation duties",
      "D": "Self-care eliminates the legal duty to report suspected abuse"
    },
    "answer": "A",
    "explanation": "Hearing repeated trauma disclosures can lead to vicarious trauma or compassion fatigue, so nurse self-care supports sustained, effective practice; it does not remove reporting duties."
  },
  {
    "id": 294,
    "chapter": 30,
    "domain": "Lifespan & Population-Specific Assessment",
    "question": "Which environment best supports disclosure during a family violence screen?",
    "options": {
      "A": "A private room with the door closed and no interruptions",
      "B": "A shared hallway where other staff can overhear",
      "C": "A busy waiting room with family members nearby",
      "D": "A phone call placed on speaker in a shared office"
    },
    "answer": "A",
    "explanation": "A private, closed-door setting protects confidentiality and safety, unlike public or overheard settings that discourage honest disclosure."
  },
  {
    "id": 295,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "Why does the sequence of a head-to-toe assessment matter clinically?",
    "options": {
      "A": "It minimizes position changes and increases patient comfort and efficiency",
      "B": "It ensures every system is examined in alphabetical order",
      "C": "It is required only for legal documentation purposes",
      "D": "It allows the nurse to skip vital signs entirely"
    },
    "answer": "A",
    "explanation": "A logical sequence reduces the number of position changes needed, improving efficiency and comfort, rather than following alphabetical order or omitting vital signs."
  },
  {
    "id": 296,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "Which general principle helps make a head-to-toe assessment efficient?",
    "options": {
      "A": "Group assessments by body region to limit repositioning",
      "B": "Perform all auscultation last, after the patient has dressed",
      "C": "Complete the neurological exam before introducing yourself",
      "D": "Assess each system in a random order each time"
    },
    "answer": "A",
    "explanation": "Organizing the exam by region reduces unnecessary repositioning and saves time, unlike random ordering, delaying auscultation, or skipping introductions."
  },
  {
    "id": 297,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "In a suggested head-to-toe sequence, where does auscultation of heart sounds typically occur relative to inspection?",
    "options": {
      "A": "After inspecting and palpating the chest, before moving to the abdomen",
      "B": "Before any introduction or explanation to the patient",
      "C": "Only at the very end of the entire assessment",
      "D": "Before assessing the head and neck region"
    },
    "answer": "A",
    "explanation": "Heart auscultation logically follows chest inspection and palpation and precedes the abdominal exam in a typical head-to-toe sequence."
  },
  {
    "id": 298,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "How should the standard sequence be adapted for an inpatient admission assessment?",
    "options": {
      "A": "Expand it to include a detailed history and system-by-system review",
      "B": "Shorten it to vital signs only, omitting the physical exam",
      "C": "Eliminate documentation since admission notes are optional",
      "D": "Perform only the systems the patient specifically requests"
    },
    "answer": "A",
    "explanation": "Admission assessments are typically comprehensive, including detailed history and full system review, unlike abbreviated or patient-directed approaches."
  },
  {
    "id": 299,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "How might the head-to-toe sequence be adapted for a patient with limited mobility in an outpatient clinic?",
    "options": {
      "A": "Reorganize the order to minimize position changes given mobility limits",
      "B": "Require the patient to stand for the entire examination",
      "C": "Omit musculoskeletal assessment entirely for all such patients",
      "D": "Refuse to perform the assessment until mobility improves"
    },
    "answer": "A",
    "explanation": "The sequence can be reorganized to accommodate mobility limitations while still gathering necessary data, rather than requiring standing, skipping systems, or refusing care."
  },
  {
    "id": 300,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "During a worked head-to-toe narrative, which action reflects proper technique when moving from the head and neck to the chest?",
    "options": {
      "A": "Explaining the next step to the patient before proceeding",
      "B": "Leaving the room without informing the patient",
      "C": "Skipping hand hygiene between assessment regions",
      "D": "Recording findings only after the entire visit ends"
    },
    "answer": "A",
    "explanation": "Communicating each step maintains patient comfort and consent throughout the exam, unlike leaving unexpectedly, skipping hygiene, or delaying all documentation."
  },
  {
    "id": 301,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "Which is an example of a general efficiency principle in a full physical examination?",
    "options": {
      "A": "Comparing bilateral findings side by side as each region is assessed",
      "B": "Assessing the right and left sides on separate calendar days",
      "C": "Documenting findings before the assessment has been performed",
      "D": "Avoiding any exposure of skin during the skin assessment"
    },
    "answer": "A",
    "explanation": "Comparing bilateral findings in real time is an efficient technique, unlike splitting the exam across days, documenting prematurely, or refusing needed exposure."
  },
  {
    "id": 302,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "What is a key benefit of using a consistent head-to-toe sequence across patients?",
    "options": {
      "A": "It reduces the risk of missing a body system or region",
      "B": "It guarantees the same diagnosis regardless of findings",
      "C": "It removes the need for individualized patient assessment",
      "D": "It allows the nurse to skip the patient interview"
    },
    "answer": "A",
    "explanation": "A consistent sequence helps prevent omissions, while it does not guarantee diagnoses, replace individualization, or eliminate the interview."
  },
  {
    "id": 303,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "When adapting the sequence for a bedbound inpatient, which approach is most appropriate?",
    "options": {
      "A": "Perform posterior assessments during routine repositioning turns",
      "B": "Require the patient to sit fully upright for every component",
      "C": "Omit the posterior thorax assessment for all bedbound patients",
      "D": "Delay the entire assessment until the patient can ambulate"
    },
    "answer": "A",
    "explanation": "Coordinating posterior exam components with routine turning minimizes discomfort while still completing the assessment, unlike omitting it or delaying indefinitely."
  },
  {
    "id": 304,
    "chapter": 31,
    "domain": "Integration & Documentation",
    "question": "What best describes the overall goal of a worked head-to-toe assessment narrative in teaching materials?",
    "options": {
      "A": "To model organized, efficient, patient-centred examination technique",
      "B": "To provide a script that must be memorized word for word",
      "C": "To demonstrate that documentation is unnecessary during exams",
      "D": "To show that every patient requires an identical exam length"
    },
    "answer": "A",
    "explanation": "A worked narrative models organized, patient-centred technique for learners, rather than serving as a rigid script, dismissing documentation, or standardizing exam length."
  },
  {
    "id": 305,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "How does a focused assessment differ from a complete assessment?",
    "options": {
      "A": "It addresses a specific concern rather than all body systems",
      "B": "It is always longer than a complete assessment",
      "C": "It replaces the need for any baseline assessment",
      "D": "It is performed only during a primary survey"
    },
    "answer": "A",
    "explanation": "A focused assessment targets a specific problem area, unlike a complete assessment, and it does not replace baseline data or require an emergency context."
  },
  {
    "id": 306,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "During an emergent situation, what is the priority of the primary survey?",
    "options": {
      "A": "Rapidly identify and address immediate threats to life",
      "B": "Complete a detailed past medical and social history",
      "C": "Perform a thorough head-to-toe skin inspection first",
      "D": "Document findings in narrative format before intervening"
    },
    "answer": "A",
    "explanation": "The primary survey rapidly identifies life-threatening problems such as airway or circulation compromise, before detailed history or skin inspection."
  },
  {
    "id": 307,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "What typically occurs during the secondary survey after the primary survey is completed?",
    "options": {
      "A": "A more detailed, head-to-toe examination and history gathering",
      "B": "A repeat of airway, breathing, and circulation checks only",
      "C": "Immediate discharge planning regardless of findings",
      "D": "Discontinuation of all further monitoring"
    },
    "answer": "A",
    "explanation": "The secondary survey involves a more detailed exam and history once life threats are addressed, rather than repeating only ABCs or ending monitoring."
  },
  {
    "id": 308,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "What is the primary purpose of shift and point-of-care reassessment routines?",
    "options": {
      "A": "To detect changes in patient status in a timely, ongoing manner",
      "B": "To replace the need for admission assessments entirely",
      "C": "To satisfy legal requirements without informing the care team",
      "D": "To be performed only once during a multi-day admission"
    },
    "answer": "A",
    "explanation": "Regular reassessment detects clinical changes promptly, while it does not replace admission assessments or occur only once during a stay."
  },
  {
    "id": 309,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "Which documentation format organizes notes by Subjective, Objective, Assessment, and Plan?",
    "options": {
      "A": "SOAP",
      "B": "SBAR",
      "C": "PIE",
      "D": "DAR"
    },
    "answer": "A",
    "explanation": "SOAP stands for Subjective, Objective, Assessment, Plan; SBAR is for handoff communication, PIE and DAR use different structured formats."
  },
  {
    "id": 310,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "What does the SBAR framework primarily support in interprofessional practice?",
    "options": {
      "A": "Clear, structured communication of findings to the care team",
      "B": "A standardized method for administering medications",
      "C": "A billing code system for hospital reimbursement",
      "D": "A method for calculating fluid balance totals"
    },
    "answer": "A",
    "explanation": "SBAR (Situation, Background, Assessment, Recommendation) structures clinical communication between providers, not medication administration or billing."
  },
  {
    "id": 311,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "Beyond SBAR, which strategy supports effective interprofessional communication during handoff?",
    "options": {
      "A": "Closed-loop communication to confirm information was understood",
      "B": "Delivering all information without allowing questions",
      "C": "Relying exclusively on written notes with no verbal exchange",
      "D": "Limiting handoff communication to physicians only"
    },
    "answer": "A",
    "explanation": "Closed-loop communication confirms mutual understanding and reduces errors, unlike one-way delivery, written-only exchange, or excluding other team members."
  },
  {
    "id": 312,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "A nurse notices a new, subtle change during a point-of-care reassessment. What is the best next action?",
    "options": {
      "A": "Compare against baseline and communicate the change promptly",
      "B": "Wait until the next scheduled shift assessment to report it",
      "C": "Document the finding only, without notifying the team",
      "D": "Assume the change is insignificant and continue routine care"
    },
    "answer": "A",
    "explanation": "Comparing new findings to baseline and communicating promptly supports early intervention, unlike delaying, withholding notification, or dismissing the change."
  },
  {
    "id": 313,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "When bringing focused, emergency, and routine assessment together, what best reflects safe practice?",
    "options": {
      "A": "Selecting the assessment approach based on clinical urgency and context",
      "B": "Always performing a complete assessment regardless of urgency",
      "C": "Using the same documentation format for every clinical situation",
      "D": "Skipping reassessment once the initial assessment is charted"
    },
    "answer": "A",
    "explanation": "Safe practice matches the assessment type and documentation to clinical urgency and setting, rather than using one rigid approach for all situations."
  },
  {
    "id": 314,
    "chapter": 32,
    "domain": "Integration & Documentation",
    "question": "Which scenario best illustrates appropriate use of a focused assessment?",
    "options": {
      "A": "Reassessing a surgical dressing site after a patient reports new pain",
      "B": "Performing a full systems review for a routine annual physical",
      "C": "Conducting an admission history for a new inpatient",
      "D": "Completing a comprehensive geriatric assessment on intake"
    },
    "answer": "A",
    "explanation": "A focused assessment targets the specific concern of new pain at a surgical site, while the other options describe comprehensive assessments."
  }
];
