import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreatelinksInputSchema } from './ProjectTemplateCreatelinksInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema';
import { ProjectUncheckedCreateNestedManyWithoutTemplateInputSchema } from './ProjectUncheckedCreateNestedManyWithoutTemplateInputSchema';

export const ProjectTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectTemplateUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  tags: z.lazy(() => ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  implementations: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default ProjectTemplateUncheckedCreateInputSchema;
