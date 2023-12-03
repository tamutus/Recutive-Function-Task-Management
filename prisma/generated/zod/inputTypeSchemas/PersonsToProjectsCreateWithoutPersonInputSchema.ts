import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutVolunteersInputSchema } from './ProjectCreateNestedOneWithoutVolunteersInputSchema';

export const PersonsToProjectsCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateWithoutPersonInput> = z.object({
  volunteerDate: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutVolunteersInputSchema)
}).strict();

export default PersonsToProjectsCreateWithoutPersonInputSchema;
