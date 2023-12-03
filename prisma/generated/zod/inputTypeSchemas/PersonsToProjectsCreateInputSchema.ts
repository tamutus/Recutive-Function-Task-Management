import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutProjectsInputSchema } from './PersonCreateNestedOneWithoutProjectsInputSchema';
import { ProjectCreateNestedOneWithoutVolunteersInputSchema } from './ProjectCreateNestedOneWithoutVolunteersInputSchema';

export const PersonsToProjectsCreateInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateInput> = z.object({
  volunteerDate: z.coerce.date().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutProjectsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutVolunteersInputSchema)
}).strict();

export default PersonsToProjectsCreateInputSchema;
