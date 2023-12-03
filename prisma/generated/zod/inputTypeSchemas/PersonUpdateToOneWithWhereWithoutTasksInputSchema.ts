import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutTasksInputSchema } from './PersonUpdateWithoutTasksInputSchema';
import { PersonUncheckedUpdateWithoutTasksInputSchema } from './PersonUncheckedUpdateWithoutTasksInputSchema';

export const PersonUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutTasksInputSchema;
