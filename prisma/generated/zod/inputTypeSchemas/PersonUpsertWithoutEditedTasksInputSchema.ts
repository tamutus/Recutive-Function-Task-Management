import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutEditedTasksInputSchema } from './PersonUpdateWithoutEditedTasksInputSchema';
import { PersonUncheckedUpdateWithoutEditedTasksInputSchema } from './PersonUncheckedUpdateWithoutEditedTasksInputSchema';
import { PersonCreateWithoutEditedTasksInputSchema } from './PersonCreateWithoutEditedTasksInputSchema';
import { PersonUncheckedCreateWithoutEditedTasksInputSchema } from './PersonUncheckedCreateWithoutEditedTasksInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutEditedTasksInputSchema: z.ZodType<Prisma.PersonUpsertWithoutEditedTasksInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedTasksInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedTasksInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutEditedTasksInputSchema;
