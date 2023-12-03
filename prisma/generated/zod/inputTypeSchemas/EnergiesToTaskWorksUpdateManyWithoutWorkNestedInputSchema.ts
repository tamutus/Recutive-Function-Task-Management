import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema';
import { EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema } from './EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema } from './EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema } from './EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema';
import { EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema } from './EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema';
import { EnergiesToTaskWorksScalarWhereInputSchema } from './EnergiesToTaskWorksScalarWhereInputSchema';

export const EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateManyWithoutWorkNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema).array(),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUpsertWithWhereUniqueWithoutWorkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema;
