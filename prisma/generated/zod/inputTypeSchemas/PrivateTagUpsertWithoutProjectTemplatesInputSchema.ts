import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUpdateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema';
import { PrivateTagCreateWithoutProjectTemplatesInputSchema } from './PrivateTagCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutProjectTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutProjectTemplatesInputSchema;
