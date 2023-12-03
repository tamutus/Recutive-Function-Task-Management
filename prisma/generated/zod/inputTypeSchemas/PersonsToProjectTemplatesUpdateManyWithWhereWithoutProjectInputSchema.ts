import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesScalarWhereInputSchema } from './PersonsToProjectTemplatesScalarWhereInputSchema';
import { PersonsToProjectTemplatesUpdateManyMutationInputSchema } from './PersonsToProjectTemplatesUpdateManyMutationInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema';

export const PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema;
