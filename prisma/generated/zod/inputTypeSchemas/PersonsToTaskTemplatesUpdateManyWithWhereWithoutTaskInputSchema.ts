import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesScalarWhereInputSchema } from './PersonsToTaskTemplatesScalarWhereInputSchema';
import { PersonsToTaskTemplatesUpdateManyMutationInputSchema } from './PersonsToTaskTemplatesUpdateManyMutationInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
