import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutTasksInputSchema } from './PersonUpdateWithoutTasksInputSchema';
import { PersonUncheckedUpdateWithoutTasksInputSchema } from './PersonUncheckedUpdateWithoutTasksInputSchema';
import { PersonCreateWithoutTasksInputSchema } from './PersonCreateWithoutTasksInputSchema';
import { PersonUncheckedCreateWithoutTasksInputSchema } from './PersonUncheckedCreateWithoutTasksInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutTasksInputSchema: z.ZodType<Prisma.PersonUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutTasksInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutTasksInputSchema;
