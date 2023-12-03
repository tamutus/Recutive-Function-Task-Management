import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEditedProjectsInputSchema } from './PersonCreateNestedOneWithoutEditedProjectsInputSchema';
import { ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema';

export const PersonsToProjectTemplatesCreateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEditedProjectsInputSchema),
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default PersonsToProjectTemplatesCreateInputSchema;
