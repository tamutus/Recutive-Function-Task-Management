import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutPersonInputSchema } from './PrivateTagCreateWithoutPersonInputSchema';
import { PrivateTagUncheckedCreateWithoutPersonInputSchema } from './PrivateTagUncheckedCreateWithoutPersonInputSchema';

export const PrivateTagCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutPersonInputSchema;
