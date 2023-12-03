import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutTaskTemplatesInputSchema } from './PrivateTagCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema';

export const PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema;
