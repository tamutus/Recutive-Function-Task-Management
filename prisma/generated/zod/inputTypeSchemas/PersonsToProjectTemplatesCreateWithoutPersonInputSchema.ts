import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema';

export const PersonsToProjectTemplatesCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateWithoutPersonInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default PersonsToProjectTemplatesCreateWithoutPersonInputSchema;
