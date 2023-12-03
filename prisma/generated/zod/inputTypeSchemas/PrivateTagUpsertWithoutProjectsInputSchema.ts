import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutProjectsInputSchema } from './PrivateTagUpdateWithoutProjectsInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectsInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectsInputSchema';
import { PrivateTagCreateWithoutProjectsInputSchema } from './PrivateTagCreateWithoutProjectsInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectsInputSchema } from './PrivateTagUncheckedCreateWithoutProjectsInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutProjectsInputSchema;
