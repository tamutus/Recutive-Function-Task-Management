import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUpdateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema';
import { PrivateTagCreateWithoutTaskTemplatesInputSchema } from './PrivateTagCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutTaskTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutTaskTemplatesInputSchema;
