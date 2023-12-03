import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesScalarWhereInputSchema } from './PersonsToTaskTemplatesScalarWhereInputSchema';
import { PersonsToTaskTemplatesUpdateManyMutationInputSchema } from './PersonsToTaskTemplatesUpdateManyMutationInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonInputSchema';

export const PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema;
