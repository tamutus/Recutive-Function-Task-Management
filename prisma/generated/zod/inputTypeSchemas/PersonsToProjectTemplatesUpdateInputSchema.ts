import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema } from './PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema';
import { ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const PersonsToProjectTemplatesUpdateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEditedProjectsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesUpdateInputSchema;
