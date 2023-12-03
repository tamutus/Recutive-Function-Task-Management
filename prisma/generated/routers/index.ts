import { t } from "./helpers/createRouter";
import { peopleRouter } from "./Person.router";
import { projecttemplatesRouter } from "./ProjectTemplate.router";
import { personstoprojecttemplatesRouter } from "./PersonsToProjectTemplates.router";
import { projectsRouter } from "./Project.router";
import { personstoprojectsRouter } from "./PersonsToProjects.router";
import { tasktemplatesRouter } from "./TaskTemplate.router";
import { tasktemplatelinksRouter } from "./TaskTemplateLink.router";
import { personstotasktemplatesRouter } from "./PersonsToTaskTemplates.router";
import { tasksRouter } from "./Task.router";
import { tasklinksRouter } from "./TaskLink.router";
import { taskworksRouter } from "./TaskWork.router";
import { projecttemplatestotasktemplatesRouter } from "./ProjectTemplatesToTaskTemplates.router";
import { projectstotasksRouter } from "./ProjectsToTasks.router";
import { tagsRouter } from "./Tag.router";
import { privatetagsRouter } from "./PrivateTag.router";
import { personstotagsRouter } from "./PersonsToTags.router";
import { projecttemplatestotagsRouter } from "./ProjectTemplatesToTags.router";
import { privatetagstoprojecttemplatesRouter } from "./PrivateTagsToProjectTemplates.router";
import { tagstotasktemplatesRouter } from "./TagsToTaskTemplates.router";
import { privatetagstotasktemplatesRouter } from "./PrivateTagsToTaskTemplates.router";
import { projectstotagsRouter } from "./ProjectsToTags.router";
import { privatetagstoprojectsRouter } from "./PrivateTagsToProjects.router";
import { tagstotasksRouter } from "./TagsToTasks.router";
import { privatetagstotasksRouter } from "./PrivateTagsToTasks.router";
import { energyRouter } from "./Energy.router";
import { privateenergiesRouter } from "./PrivateEnergy.router";
import { energiestoprojecttemplatesRouter } from "./EnergiesToProjectTemplates.router";
import { privateenergiestoprojecttemplatesRouter } from "./PrivateEnergiesToProjectTemplates.router";
import { energiestoprojectsRouter } from "./EnergiesToProjects.router";
import { privateenergiestoprojectsRouter } from "./PrivateEnergiesToProjects.router";
import { energiestotasktemplatesRouter } from "./EnergiesToTaskTemplates.router";
import { privateenergiestotasktemplatesRouter } from "./PrivateEnergiesToTaskTemplates.router";
import { energiestotasksRouter } from "./EnergiesToTasks.router";
import { privateenergiestotasksRouter } from "./PrivateEnergiesToTasks.router";
import { energiestotagsRouter } from "./EnergiesToTags.router";
import { energiestoprivatetagsRouter } from "./EnergiesToPrivateTags.router";
import { privateenergiestoprivatetagsRouter } from "./PrivateEnergiesToPrivateTags.router";
import { privateenergiestotagsRouter } from "./PrivateEnergiesToTags.router";
import { energiestopersonsRouter } from "./EnergiesToPersons.router";
import { energymeasurementsRouter } from "./EnergyMeasurement.router";
import { energiestotaskworksRouter } from "./EnergiesToTaskWorks.router";
import { privateenergiestotaskworksRouter } from "./PrivateEnergiesToTaskWorks.router";
import { prioritiesRouter } from "./Priority.router";
import { prioritiestotasksRouter } from "./PrioritiesToTasks.router";
import { prioritiestoprojectsRouter } from "./PrioritiesToProjects.router";
import { prioritiestoskillsRouter } from "./PrioritiesToSkills.router";
import { prioritiestoskillpathsRouter } from "./PrioritiesToSkillPaths.router";
import { prioritiestotagsRouter } from "./PrioritiesToTags.router";
import { prioritiestoprivatetagsRouter } from "./PrioritiesToPrivateTags.router";
import { skillpathsRouter } from "./SkillPath.router";
import { personstoskillpathsRouter } from "./PersonsToSkillPaths.router";
import { skillpathstotagsRouter } from "./SkillPathsToTags.router";
import { skillsRouter } from "./Skill.router";
import { skilllinksRouter } from "./SkillLink.router";
import { skillstoskillpathsRouter } from "./SkillsToSkillPaths.router";
import { personstoskillsRouter } from "./PersonsToSkills.router";
import { skillstotagsRouter } from "./SkillsToTags.router";
import { skillstotasktemplatesRouter } from "./SkillsToTaskTemplates.router";
import { skillstotasksRouter } from "./SkillsToTasks.router";
import { energiestoskillsRouter } from "./EnergiesToSkills.router";
import { privateenergiestoskillsRouter } from "./PrivateEnergiesToSkills.router";

export const appRouter = t.router({
  person: peopleRouter,
  projecttemplate: projecttemplatesRouter,
  personstoprojecttemplates: personstoprojecttemplatesRouter,
  project: projectsRouter,
  personstoprojects: personstoprojectsRouter,
  tasktemplate: tasktemplatesRouter,
  tasktemplatelink: tasktemplatelinksRouter,
  personstotasktemplates: personstotasktemplatesRouter,
  task: tasksRouter,
  tasklink: tasklinksRouter,
  taskwork: taskworksRouter,
  projecttemplatestotasktemplates: projecttemplatestotasktemplatesRouter,
  projectstotasks: projectstotasksRouter,
  tag: tagsRouter,
  privatetag: privatetagsRouter,
  personstotags: personstotagsRouter,
  projecttemplatestotags: projecttemplatestotagsRouter,
  privatetagstoprojecttemplates: privatetagstoprojecttemplatesRouter,
  tagstotasktemplates: tagstotasktemplatesRouter,
  privatetagstotasktemplates: privatetagstotasktemplatesRouter,
  projectstotags: projectstotagsRouter,
  privatetagstoprojects: privatetagstoprojectsRouter,
  tagstotasks: tagstotasksRouter,
  privatetagstotasks: privatetagstotasksRouter,
  energy: energyRouter,
  privateenergy: privateenergiesRouter,
  energiestoprojecttemplates: energiestoprojecttemplatesRouter,
  privateenergiestoprojecttemplates: privateenergiestoprojecttemplatesRouter,
  energiestoprojects: energiestoprojectsRouter,
  privateenergiestoprojects: privateenergiestoprojectsRouter,
  energiestotasktemplates: energiestotasktemplatesRouter,
  privateenergiestotasktemplates: privateenergiestotasktemplatesRouter,
  energiestotasks: energiestotasksRouter,
  privateenergiestotasks: privateenergiestotasksRouter,
  energiestotags: energiestotagsRouter,
  energiestoprivatetags: energiestoprivatetagsRouter,
  privateenergiestoprivatetags: privateenergiestoprivatetagsRouter,
  privateenergiestotags: privateenergiestotagsRouter,
  energiestopersons: energiestopersonsRouter,
  energymeasurement: energymeasurementsRouter,
  energiestotaskworks: energiestotaskworksRouter,
  privateenergiestotaskworks: privateenergiestotaskworksRouter,
  priority: prioritiesRouter,
  prioritiestotasks: prioritiestotasksRouter,
  prioritiestoprojects: prioritiestoprojectsRouter,
  prioritiestoskills: prioritiestoskillsRouter,
  prioritiestoskillpaths: prioritiestoskillpathsRouter,
  prioritiestotags: prioritiestotagsRouter,
  prioritiestoprivatetags: prioritiestoprivatetagsRouter,
  skillpath: skillpathsRouter,
  personstoskillpaths: personstoskillpathsRouter,
  skillpathstotags: skillpathstotagsRouter,
  skill: skillsRouter,
  skilllink: skilllinksRouter,
  skillstoskillpaths: skillstoskillpathsRouter,
  personstoskills: personstoskillsRouter,
  skillstotags: skillstotagsRouter,
  skillstotasktemplates: skillstotasktemplatesRouter,
  skillstotasks: skillstotasksRouter,
  energiestoskills: energiestoskillsRouter,
  privateenergiestoskills: privateenergiestoskillsRouter
})

