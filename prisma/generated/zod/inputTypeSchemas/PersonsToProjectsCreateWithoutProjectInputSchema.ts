import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutProjectsInputSchema } from './PersonCreateNestedOneWithoutProjectsInputSchema';

export const PersonsToProjectsCreateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateWithoutProjectInput> = z.object({
  volunteerDate: z.coerce.date().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PersonsToProjectsCreateWithoutProjectInputSchema;
