import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsScalarWhereInputSchema } from './PersonsToProjectsScalarWhereInputSchema';
import { PersonsToProjectsUpdateManyMutationInputSchema } from './PersonsToProjectsUpdateManyMutationInputSchema';
import { PersonsToProjectsUncheckedUpdateManyWithoutProjectInputSchema } from './PersonsToProjectsUncheckedUpdateManyWithoutProjectInputSchema';

export const PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectsUpdateManyMutationInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema;
