import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema } from './PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksScalarWhereInputSchema } from './PrivateEnergiesToTaskWorksScalarWhereInputSchema';

export const PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema;
