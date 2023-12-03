import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEditedProjectsInputSchema } from './PersonCreateNestedOneWithoutEditedProjectsInputSchema';

export const PersonsToProjectTemplatesCreateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateWithoutProjectInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEditedProjectsInputSchema)
}).strict();

export default PersonsToProjectTemplatesCreateWithoutProjectInputSchema;
