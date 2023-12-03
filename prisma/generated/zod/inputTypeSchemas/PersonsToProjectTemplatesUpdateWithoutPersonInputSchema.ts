import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const PersonsToProjectTemplatesUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateWithoutPersonInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesUpdateWithoutPersonInputSchema;
