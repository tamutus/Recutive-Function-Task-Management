import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreatelinksInputSchema } from './ProjectTemplateCreatelinksInputSchema';
import { PersonsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateNestedManyWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateNestedManyWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutProjectInputSchema';

export const ProjectTemplateCreateWithoutImplementationsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateWithoutImplementationsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema).optional(),
  tags: z.lazy(() => ProjectTemplatesToTagsCreateNestedManyWithoutProjectInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutProjectInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectTemplateCreateWithoutImplementationsInputSchema;