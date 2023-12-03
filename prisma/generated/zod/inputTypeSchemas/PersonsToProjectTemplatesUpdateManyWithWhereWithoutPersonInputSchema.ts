import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesScalarWhereInputSchema } from './PersonsToProjectTemplatesScalarWhereInputSchema';
import { PersonsToProjectTemplatesUpdateManyMutationInputSchema } from './PersonsToProjectTemplatesUpdateManyMutationInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonInputSchema';

export const PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema;
