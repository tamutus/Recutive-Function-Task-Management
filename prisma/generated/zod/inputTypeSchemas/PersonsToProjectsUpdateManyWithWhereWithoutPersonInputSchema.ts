import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsScalarWhereInputSchema } from './PersonsToProjectsScalarWhereInputSchema';
import { PersonsToProjectsUpdateManyMutationInputSchema } from './PersonsToProjectsUpdateManyMutationInputSchema';
import { PersonsToProjectsUncheckedUpdateManyWithoutPersonInputSchema } from './PersonsToProjectsUncheckedUpdateManyWithoutPersonInputSchema';

export const PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectsUpdateManyMutationInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema;
