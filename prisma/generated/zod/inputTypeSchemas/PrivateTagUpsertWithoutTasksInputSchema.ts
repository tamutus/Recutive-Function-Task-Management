import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutTasksInputSchema } from './PrivateTagUpdateWithoutTasksInputSchema';
import { PrivateTagUncheckedUpdateWithoutTasksInputSchema } from './PrivateTagUncheckedUpdateWithoutTasksInputSchema';
import { PrivateTagCreateWithoutTasksInputSchema } from './PrivateTagCreateWithoutTasksInputSchema';
import { PrivateTagUncheckedCreateWithoutTasksInputSchema } from './PrivateTagUncheckedCreateWithoutTasksInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutTasksInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutTasksInputSchema;
