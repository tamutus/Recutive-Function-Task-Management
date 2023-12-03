import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPersonInputSchema } from './PrivateTagCreateWithoutPersonInputSchema';
import { PrivateTagUncheckedCreateWithoutPersonInputSchema } from './PrivateTagUncheckedCreateWithoutPersonInputSchema';
import { PrivateTagCreateOrConnectWithoutPersonInputSchema } from './PrivateTagCreateOrConnectWithoutPersonInputSchema';
import { PrivateTagCreateManyPersonInputEnvelopeSchema } from './PrivateTagCreateManyPersonInputEnvelopeSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagCreateWithoutPersonInputSchema).array(),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PrivateTagCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagWhereUniqueInputSchema),z.lazy(() => PrivateTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagCreateNestedManyWithoutPersonInputSchema;
