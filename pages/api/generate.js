import listHelpers from "prompt-lists"
const callLists = {};

for (const category of Object.keys(listHelpers)) {
  for (const listName of Object.keys(listHelpers[category])) {
    callLists[`${category}.${listName}`] = listHelpers[category][listName]
  }
}

const generate = (promptTemplate) => {
  return promptTemplate
    .replace(/\[(.*?)\]/g, (_match, listName) => {
      if (!callLists[listName]) {
        return `[${listName}]`
      }
      return callLists[listName](1);
    });
}

export default async function handler(req, res) {
  const promptTemplate = req.body.promptTemplate || req.query.promptTemplate;
  const generatedPrompt = generate(promptTemplate);
  res.status(200).json(generatedPrompt);
}
