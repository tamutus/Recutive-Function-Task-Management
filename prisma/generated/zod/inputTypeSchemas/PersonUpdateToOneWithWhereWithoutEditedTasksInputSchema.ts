import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutEditedTasksInputSchema } from './PersonUpdateWithoutEditedTasksInputSchema';
import { PersonUncheckedUpdateWithoutEditedTasksInputSchema } from './PersonUncheckedUpdateWithoutEditedTasksInputSchema';

export const PersonUpdateToOneWithWhereWithoutEditedTasksInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutEditedTasksInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutEditedTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedTasksInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutEditedTasksInputSchema;
